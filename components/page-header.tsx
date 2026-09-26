// Intro block for inner pages: large Sora title, muted subtitle and a soft red glow behind it.
export function PageHeader({ title, text }: { title: string; text?: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[1600px] px-4 pb-10 pt-36 text-center md:px-6 md:pb-14 md:pt-44 lg:pt-48">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px]"
        style={{ background: "radial-gradient(45% 60% at 50% 30%, rgba(225,37,27,0.16), transparent 70%)" }}
      />
      <h1 className="hero-rise mx-auto max-w-3xl font-display text-[40px] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-[52px] lg:text-[68px]">
        {title}
      </h1>
      {text && (
        <p
          className="hero-rise mx-auto mt-5 max-w-[52ch] text-[15px] leading-relaxed text-white/60 md:text-[17px]"
          style={{ animationDelay: "0.15s" }}
        >
          {text}
        </p>
      )}
    </div>
  )
}
