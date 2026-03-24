const CDN = "https://cdn.jsdelivr.net/gh/sealiee11/gnmathpr0-y@main/";
importScripts(CDN + "stuf/uv.bundle.js");
self.__uv$config = {
    prefix: "./stuf/service/",
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: CDN + "stuf/uv.handler.js",
    bundle: CDN + "stuf/uv.bundle.js",
    config: CDN + "stuf/uv.config.js",
    sw: CDN + "stuf/sw.js",
};
importScripts(CDN + "stuf/sw.js");
