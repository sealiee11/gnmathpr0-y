importScripts("stuf/uv.bundle.js");
importScripts("stuf/uv.config.js");
importScripts("stuf/uv.sw.js");

const uv = new UVServiceWorker();

self.addEventListener("fetch", (event) => {
    event.respondWith(
        (async () => {
            if (uv.route(event)) {
                return await uv.fetch(event);
            }
            return await fetch(event.request);
        })()
    );
});
