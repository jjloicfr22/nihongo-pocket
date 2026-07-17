const CACHE='nihongo-pocket-v2';
const ASSETS=[
'./nihongo_pocket_10_lessons.html',
'./manifest.json',
'./icon-192.png',
'./icon-512.png'
];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>{
e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});