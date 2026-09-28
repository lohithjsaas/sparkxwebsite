// One-time setup for showing ALL Google reviews via the Google Business Profile API.
//
// 1. Google Cloud Console → create an OAuth client (type "Desktop app") in a project that has
//    Google Business Profile API access approved, then put these in .env.local:
//      GOOGLE_OAUTH_CLIENT_ID=...
//      GOOGLE_OAUTH_CLIENT_SECRET=...
// 2. Run: node scripts/google-business-auth.mjs
// 3. Sign in with the Google account that owns/manages the SparkX business profile.
//
// The script writes GOOGLE_OAUTH_REFRESH_TOKEN, GOOGLE_BUSINESS_ACCOUNT_ID and
// GOOGLE_BUSINESS_LOCATION_ID into .env.local (secrets are never printed).

import { createServer } from "node:http"
import { readFileSync, writeFileSync, existsSync } from "node:fs"
import { exec } from "node:child_process"

const ENV_FILE = ".env.local"
const PORT = 53682
const REDIRECT_URI = `http://localhost:${PORT}/callback`
const SCOPE = "https://www.googleapis.com/auth/business.manage"

const env = Object.fromEntries(
  (existsSync(ENV_FILE) ? readFileSync(ENV_FILE, "utf8") : "")
    .split(/\r?\n/)
    .filter((l) => /^[A-Z0-9_]+=/.test(l))
    .map((l) => [l.slice(0, l.indexOf("=")), l.slice(l.indexOf("=") + 1).replace(/^"|"$/g, "")]),
)
const clientId = env.GOOGLE_OAUTH_CLIENT_ID
const clientSecret = env.GOOGLE_OAUTH_CLIENT_SECRET
if (!clientId || !clientSecret) {
  console.error(`Add GOOGLE_OAUTH_CLIENT_ID and GOOGLE_OAUTH_CLIENT_SECRET to ${ENV_FILE} first.`)
  process.exit(1)
}

function setEnv(key, value) {
  let text = existsSync(ENV_FILE) ? readFileSync(ENV_FILE, "utf8") : ""
  const line = `${key}="${value}"`
  text = new RegExp(`^${key}=.*$`, "m").test(text)
    ? text.replace(new RegExp(`^${key}=.*$`, "m"), line)
    : `${text.replace(/\s*$/, "")}\n${line}\n`
  writeFileSync(ENV_FILE, text)
}

async function api(url, token) {
  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } })
  const body = await res.json()
  if (!res.ok) throw new Error(`${res.status} ${body.error?.message ?? res.statusText} (${url})`)
  return body
}

const authUrl =
  "https://accounts.google.com/o/oauth2/v2/auth?" +
  new URLSearchParams({
    client_id: clientId,
    redirect_uri: REDIRECT_URI,
    response_type: "code",
    scope: SCOPE,
    access_type: "offline",
    prompt: "consent",
  })

const server = createServer(async (req, res) => {
  const url = new URL(req.url, REDIRECT_URI)
  if (url.pathname !== "/callback") return res.end()
  const code = url.searchParams.get("code")
  if (!code) {
    res.end("Authorization was cancelled. You can close this tab.")
    console.error("No authorization code received:", url.searchParams.get("error"))
    return server.close()
  }
  try {
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: REDIRECT_URI,
        grant_type: "authorization_code",
      }),
    })
    const token = await tokenRes.json()
    if (!tokenRes.ok || !token.refresh_token) throw new Error(token.error_description ?? "No refresh token returned")
    setEnv("GOOGLE_OAUTH_REFRESH_TOKEN", token.refresh_token)
    console.log("✓ Saved GOOGLE_OAUTH_REFRESH_TOKEN to .env.local")

    const { accounts = [] } = await api("https://mybusinessaccountmanagement.googleapis.com/v1/accounts", token.access_token)
    const found = []
    for (const account of accounts) {
      const { locations = [] } = await api(
        `https://mybusinessbusinessinformation.googleapis.com/v1/${account.name}/locations?readMask=name,title,storefrontAddress&pageSize=100`,
        token.access_token,
      )
      for (const loc of locations) found.push({ account, loc })
    }
    for (const [i, { account, loc }] of found.entries()) {
      console.log(`  [${i}] ${loc.title} — ${loc.storefrontAddress?.locality ?? ""}  (${account.name}/${loc.name})`)
    }
    const match = found.find(({ loc }) => /spark\s*x/i.test(loc.title)) ?? found[0]
    if (!match) throw new Error("No business locations found for this Google account")
    setEnv("GOOGLE_BUSINESS_ACCOUNT_ID", match.account.name.split("/")[1])
    setEnv("GOOGLE_BUSINESS_LOCATION_ID", match.loc.name.split("/")[1])
    console.log(`✓ Using "${match.loc.title}" — saved GOOGLE_BUSINESS_ACCOUNT_ID and GOOGLE_BUSINESS_LOCATION_ID`)
    res.end("SparkX: Google Business Profile connected. You can close this tab.")
  } catch (error) {
    console.error("✗", error.message)
    res.end("Something went wrong — check the terminal.")
  }
  server.close()
})

server.listen(PORT, () => {
  console.log("Opening Google sign-in… If it doesn't open, visit:\n" + authUrl)
  const opener = process.platform === "win32" ? `start "" "${authUrl}"` : process.platform === "darwin" ? `open "${authUrl}"` : `xdg-open "${authUrl}"`
  exec(opener)
})
