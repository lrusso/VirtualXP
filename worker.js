const filesToCache = [
	"Virtual95.htm",
	"Virtual95.iso",
	"Virtual95.js",
	"Virtual95.json",
	"Virtual95.png",
	"Virtual95.wasm",
	"Virtual95BIOS.bin",
	"Virtual95FavIcon_16x16.png",
	"Virtual95FavIcon_192x192.png",
	"Virtual95FavIcon_512x512.png",
	"Virtual95Loader.js",
	"Virtual95Share.png",
	"Virtual95VGA.bin"
];

const staticCacheName = "Virtual95-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});