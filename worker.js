var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/index.html',
  '/app/app.js',
  '/app/controllers/controllers.js',
  '/app/assets/css/theme.min.css',
  '/app/assets/js/compressed.min.js',
  '/app/assets/js/base.min.js',
  '/app/assets/images/noimage.min.png'
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