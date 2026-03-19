/*global Ultraviolet*/
self.__uv$config = {
    prefix: "/stuf/service/",
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: "/stuf/uv.handler.js",
    client: "/stuf/uv.client.js",
    bundle: "/stuf/uv.bundle.js",
    config: "/stuf/uv.config.js",
    sw: "/stuf/uv.sw.js",
};
