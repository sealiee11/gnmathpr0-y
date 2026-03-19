// coop-coep-sw.js
// Injects Cross-Origin-Opener-Policy and Cross-Origin-Embedder-Policy headers
// into all responses. This enables cross-origin isolation on static hosts
// (S3, GitHub Pages, etc.) where you can't set server response headers.
// Must be registered at root scope BEFORE anything else.

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (event) => {
    const { request } = event;

    // Only handle same-origin requests
    if (new URL(request.url).origin !== location.origin) return;

    event.respondWith(
        fetch(request).then((response) => {
            // Clone headers and add COOP/COEP
            const headers = new Headers(response.headers);
            headers.set("Cross-Origin-Opener-Policy", "same-origin");
            headers.set("Cross-Origin-Embedder-Policy", "require-corp");

            return new Response(response.body, {
                status: response.status,
                statusText: response.statusText,
                headers,
            });
        })
    );
});
