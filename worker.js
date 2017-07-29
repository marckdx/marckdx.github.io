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
  '/app/assets/fonts/fonts/fontawesome-webfont.woff2',
  '/api/js/spectrum.min.js'
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