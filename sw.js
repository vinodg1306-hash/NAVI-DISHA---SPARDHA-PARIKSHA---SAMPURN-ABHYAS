self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('navi-disha-v1').then(cache => {
      return cache.addAll(['./','./index.html','./manifest.json','./icon.svg']);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
