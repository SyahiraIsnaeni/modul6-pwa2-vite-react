// service-worker.js

const cacheName = 'my-pwa-cache-v1';
const cacheAssets = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.jsx',
  // Daftar sumber daya lain yang perlu di-cache
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(cacheAssets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
