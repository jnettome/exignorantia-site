export default defineNuxtPlugin((nuxtApp) => {
  const gtagId = 'G-EJ16HX4GLW';
  
  function gtag() {
    window.dataLayer.push(arguments);
  }
  
  window.dataLayer = window.dataLayer || [];
  
  gtag("js", new Date());
  gtag("config", gtagId);
  
  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${gtagId}`,
        async: true,
      },
    ],
  });
});
