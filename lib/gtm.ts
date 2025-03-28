export const GTM_ID = 'GTM-W3GVLVSB'; // Replace with your GTM ID

export const pageview = (url: string) => {
  window.dataLayer?.push({
    event: 'pageview',
    page: url,
  });
};
