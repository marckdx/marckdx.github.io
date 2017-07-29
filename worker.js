var CACHE_NAME = 'marckdx-cache-v2';
var urlsToCache = [
  '/',
  '/index.html',
  '/app/app.js',
  '/app/controllers/controllers.js',
  '/app/assets/css/theme.min.css',
  '/app/assets/js/compressed.min.js',
  '/app/assets/js/base.min.js',
  '/app/assets/images/noimage.min.png',
  '/app/assets/css/font-awesome.min.css',
  '/app/assets/fonts/fontawesome-webfont.eot',
  '/app/assets/fonts/fontawesome-webfont.woff2',
  '/api/js/spectrum.min.js',
  'app/assets/css/font-lato.min.css',
  '/app/assets/fonts/dPJ5r9gl3kK6ijoeP1IRsvY6323mHUZFJMgTvxaG2iE.woff2',
  '/app/assets/fonts/EsvMC5un3kjyUhB9ZEPPwg.woff2',
  '/app/assets/fonts/UyBMtLsHKBKXelqf4x7VRQ.woff2',
  '/app/assets/fonts/1YwB1sO8YE1Lyjf12WNiUA.woff2'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
    event.respondWith(
      caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});