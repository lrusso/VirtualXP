const filesToCache = [
	"VirtualXP.htm",
	"VirtualXP.iso",
	"VirtualXP.js",
	"VirtualXP.json",
	"VirtualXP.png",
	"VirtualXP.wasm",
	"VirtualXPBIOS.bin",
	"VirtualXPFavIcon_16x16.png",
	"VirtualXPFavIcon_192x192.png",
	"VirtualXPFavIcon_512x512.png",
	"VirtualXPLoader.js",
	"VirtualXPShare.png",
	"VirtualXPVGA.bin"
];

const staticCacheName = "virtualxp-v1";

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