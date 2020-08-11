const staticCacheName = "static-v2";
const dynamicCacheName = "dynamic-v2";
const assets = [
  "/",
  "/404.html",
  "500.html",
  "/index.html",
  "/app.js",
  "/bundle.js",
  "/home/assets/styles/css/common.css",
  "/home/assets/styles/css/error.css",
  "/home/assets/img/brand/favicon.ico",
  "/home/assets/img/brand/icon-32x32.png",
  "/home/assets/img/profile.jpg",
  "/home/assets/img/self-1.jpg",
  "/home/assets/img/self-2.jpg",
  "https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700",
  "https://fonts.googleapis.com/css?family=Montserrat:700,900",
  "https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i",
  "https://use.fontawesome.com/releases/v5.6.1/css/all.css",
  "https://fonts.gstatic.com/s/sairaextracondensed/v4/-nFvOHYr-vcC7h8MklGBkrvmUG9rbpkisrTrG2vh1Aphim8.woff2",
  "https://fonts.gstatic.com/s/sairaextracondensed/v4/-nFvOHYr-vcC7h8MklGBkrvmUG9rbpkisrTrG2vh1Qphim8.woff2",
  "https://fonts.gstatic.com/s/sairaextracondensed/v4/-nFvOHYr-vcC7h8MklGBkrvmUG9rbpkisrTrG2vh2wph.woff2",
  "https://fonts.gstatic.com/s/sairaextracondensed/v4/-nFvOHYr-vcC7h8MklGBkrvmUG9rbpkisrTrU23h1Aphim8.woff2",
  "https://fonts.gstatic.com/s/sairaextracondensed/v4/-nFvOHYr-vcC7h8MklGBkrvmUG9rbpkisrTrU23h1Qphim8.woff2",
  "https://fonts.gstatic.com/s/sairaextracondensed/v4/-nFvOHYr-vcC7h8MklGBkrvmUG9rbpkisrTrU23h2wph.woff2",
  "https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_dJE3gTD_u50.woff2",
  "https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_dJE3g3D_u50.woff2",
  "https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_dJE3gbD_u50.woff2",
  "https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_dJE3gfD_u50.woff2",
  "https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_dJE3gnD_g.woff2",
  "https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_epG3gTD_u50.woff2",
  "https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_epG3g3D_u50.woff2",
  "https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_epG3gbD_u50.woff2",
  "https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_epG3gfD_u50.woff2",
  "https://fonts.gstatic.com/s/montserrat/v13/JTURjIg1_i6t8kCHKm45_epG3gnD_g.woff2",
  "https://fonts.gstatic.com/s/muli/v13/7Au-p_0qiz-afTf2IALT8kU.woff2",
  "https://fonts.gstatic.com/s/muli/v13/7Au-p_0qiz-afTf2IQLT8kU.woff2",
  "https://fonts.gstatic.com/s/muli/v13/7Au-p_0qiz-afTf2LwLT.woff2",
  "https://fonts.gstatic.com/s/muli/v13/7Au9p_0qiz-afTf-iCTGwmQIAFg.woff2",
  "https://fonts.gstatic.com/s/muli/v13/7Au9p_0qiz-afTf-iCTGw2QIAFg.woff2",
  "https://fonts.gstatic.com/s/muli/v13/7Au9p_0qiz-afTf-iCTGzWQI.woff2",
  "https://fonts.gstatic.com/s/muli/v13/7Auwp_0qiz-afT3GLRrX.woff2",
  "https://fonts.gstatic.com/s/muli/v13/7Auwp_0qiz-afTzGLRrX.woff2",
  "https://fonts.gstatic.com/s/muli/v13/7Auwp_0qiz-afTLGLQ.woff2",
  "https://fonts.gstatic.com/s/muli/v13/7Au_p_0qiz-adZXgOCr2z3wM.woff2",
  "https://fonts.gstatic.com/s/muli/v13/7Au_p_0qiz-adZXgOCv2z3wM.woff2",
  "https://fonts.gstatic.com/s/muli/v13/7Au_p_0qiz-adZXgOCX2zw.woff2",
  // "https://use.fontawesome.com/releases/v5.6.1/webfonts/fa-brands-400.eot",
  // "https://use.fontawesome.com/releases/v5.6.1/webfonts/fa-brands-400.eot?#iefix",
  // "https://use.fontawesome.com/releases/v5.6.1/webfonts/fa-brands-400.woff2",
  // "https://use.fontawesome.com/releases/v5.6.1/webfonts/fa-brands-400.woff",
  // "https://use.fontawesome.com/releases/v5.6.1/webfonts/fa-brands-400.ttf",
  // "https://use.fontawesome.com/releases/v5.6.1/webfonts/fa-brands-400.svg#fontawesome",
  // "https://use.fontawesome.com/releases/v5.6.1/webfonts/fa-regular-400.eo",
  // "https://use.fontawesome.com/releases/v5.6.1/webfonts/fa-regular-400.eot?#iefix",
  // "https://use.fontawesome.com/releases/v5.6.1/webfonts/fa-regular-400.woff2",
  // "https://use.fontawesome.com/releases/v5.6.1/webfonts/fa-regular-400.woff",
  // "https://use.fontawesome.com/releases/v5.6.1/webfonts/fa-regular-400.ttf",
  // "https://use.fontawesome.com/releases/v5.6.1/webfonts/fa-regular-400.svg#fontawesome",
  // "https://use.fontawesome.com/releases/v5.6.1/webfonts/fa-solid-900.eo",
  // "https://use.fontawesome.com/releases/v5.6.1/webfonts/fa-solid-900.eot?#iefix",
  // "https://use.fontawesome.com/releases/v5.6.1/webfonts/fa-solid-900.woff2",
  // "https://use.fontawesome.com/releases/v5.6.1/webfonts/fa-solid-900.woff",
  // "https://use.fontawesome.com/releases/v5.6.1/webfonts/fa-solid-900.ttf"
  // "https://use.fontawesome.com/releases/v5.6.1/webfonts/fa-solid-900.svg#fontawesome"
];

self.addEventListener("install", (event) => {
  console.log("Service worker has been installed");
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("Caching shell assets");
      cache.addAll(assets);
    })
  );
});
self.addEventListener("activate", (event) => {
  console.log("Service worker has been activated");
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== staticCacheName && key !== dynamicCacheName) {
            console.log("Removing cache ", key);
            caches.delete(key);
          }
        })
      );
    })
  );
});
self.addEventListener("fetch", (event) => {
  console.log("Fetch event triggered");
  event.respondWith(
    caches.match(event.request).then((cacheResponse) => {
      if (cacheResponse) {
        // console.log(cacheResponse);
        return cacheResponse;
      } else {
        // return fetch(event.request);
        return fetch(event.request)
          .then((resp) => {
            return caches.open(dynamicCacheName).then((cache) => {
              cache.put(event.request.url, resp.clone());
              return resp;
            });
          })
          .catch((err) => {
            console.log("Error fetching...");
          });
      }
    })
  );
});
