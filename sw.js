/* One version constant, used for both the cache name and the asset query
   strings. They used to be written out separately and drifted: this file
   precached theme.css?v=29 while index.html was already requesting ?v=30, so
   the cached copy never matched a real request and sat in storage doing
   nothing. Bump this alone, and keep it equal to the ?v= in index.html. */
const VERSION = '32';

const CACHE_NAME = `qutaiba-portfolio-v${VERSION}`;
const ASSETS = [
    './index.html',
    './selection.html',
    './manifest.json',
    `./assets/theme.css?v=${VERSION}`,
    './assets/profile-red.jpg',
    './assets/profile-pic.png',
    'https://cdn.tailwindcss.com',
    /* Open Sans, not IBM Plex Sans — this went stale when the site switched
       heading/body faces, so it was precaching a stylesheet nothing loaded. */
    'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Open+Sans:wght@400;500;600;700&display=swap'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request))
    );
});
