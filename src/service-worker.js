// Here make implementation of service worker
self.__WB_MANIFEST

self.addEventListener('install', function (event) {
    console.log('Install it!');
    event.waitUntil(
        caches.open('site-cache').then(function (cache) {
            return cache.addAll([
                'index.html',
                'bundle.js',
                'style.css',
            ]);
        }),
    );
});

self.addEventListener('activate', function (event) {
    console.log('Activate it!');
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            console.log(cacheNames);
        }),
    );
})

self.addEventListener('message', function (event) {
    console.log('Message it!', event.data);
})