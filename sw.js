const CACHE_NAME = 'museum-v5';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './bilder/bild1.jpg',
    './bilder/bild2.jpg',
    './bilder/bild3.jpg',
    './bilder/bild4.jpg',
    './bilder/bild5.jpg',
    './bilder/bild6.jpg',
    './bilder/bild7.jpg',
    './bilder/bild8.jpg',
    './bilder/bild9.jpg',
    './bilder/bild10.jpg',
    './bilder/bild11.jpg',
    './bilder/bild12.jpg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});
