var CACHE_NAME = 'marckdx-cache-v3';

var urlsToCache = [
  '/',
  '/index.html',
  '/favicon.png',
  '/assets/css/styles.css',
  '/assets/js/app.js',
  '/assets/js/main.js',
  '/assets/images/icon-192x192.png',
  '/assets/images/icon-256x256.png',
  '/assets/images/icon-48x48.png',
  '/assets/images/icon-96x96.png',
  '/assets/plugins/bootstrap/css/bootstrap.min.css',
  '/assets/plugins/bootstrap/js/bootstrap.min.js',
  '/assets/plugins/bootstrap/js/npm.js',
  '/assets/plugins/bootstrap/fonts/glyphicons-halflings-regular.eot',
  '/assets/plugins/bootstrap/fonts/glyphicons-halflings-regular.svg',
  '/assets/plugins/bootstrap/fonts/glyphicons-halflings-regular.ttf',
  '/assets/plugins/bootstrap/fonts/glyphicons-halflings-regular.woff',
  '/assets/plugins/bootstrap/fonts/glyphicons-halflings-regular.woff2',
  '/assets/plugins/bootstrap/fonts/glyphicons-halflings-regular.svg',
  '/assets/plugins/font-awesome/css/font-awesome.min.css',
  '/assets/plugins/font-awesome/css/font-awesome.css',
  '/assets/plugins/font-awesome/fonts/fontawesome-webfont.eot',
  '/assets/plugins/font-awesome/fonts/fontawesome-webfont.svg',
  '/assets/plugins/font-awesome/fonts/fontawesome-webfont.ttf',
  '/assets/plugins/font-awesome/fonts/fontawesome-webfont.woff',
  '/assets/plugins/font-awesome/fonts/fontawesome-webfont.woff2',
  '/assets/plugins/jquery-1.11.3.min.js',
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