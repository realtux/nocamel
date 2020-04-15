const define = (native, name, originalName) => {
    const properties = {
        configurable: false,
        enumerable: false,
    };

    properties.value = native[originalName];

    Object.defineProperty(native, name, properties);
};

const load = (object) => {
    try {
        for (const property of Object.getOwnPropertyNames(object)) {
            if (property.toUpperCase() === property) {
                continue;
            }

            const snake = property
                .replace(/[A-Z]+/g, (c, i) => i === 0 ? c + '_' : '_' + c)
                .toLowerCase();

            if (snake in object) {
                continue;
            }

            define(object, snake, property);
        }
    } catch(e) {
        // these errors are mostly objects that don't have a prototype
        //console.log(e)
    }
};

// global fns
decode_uri = decodeURI;
decode_uri_component = decodeURIComponent;
encode_uri = encodeURI;
encode_uri_component = encodeURIComponent;
parse_int = parseInt;
parse_float = parseFloat;
is_finite = isFinite;
is_nan = isNaN;
set_timeout = setTimeout;
set_immediate = setImmediate;
set_interval = setInterval;
clear_timeout = clearTimeout;
clear_immediate = clearImmediate;
clear_interval = clearInterval;

const builtin = [
    Function,
    Array,
    Number,
    Boolean,
    String,
    Symbol,
    Date,
    Promise,
    RegExp,
    Error,
    EvalError,
    RangeError,
    ReferenceError,
    SyntaxError,
    TypeError,
    URIError,
    JSON,
    Math,
    Intl,
    ArrayBuffer,
    Uint8Array,
    Int8Array,
    Uint16Array,
    Int16Array,
    Uint32Array,
    Int32Array,
    Float32Array,
    Float64Array,
    Uint8ClampedArray,
    DataView,
    Map,
    Set,
    WeakMap,
    WeakSet,
    Proxy,
    Reflect,
    Buffer,
    Object
];

const modules = [
    'module',
    'assert',
    'buffer',
    'child_process',
    'cluster',
    'crypto',
    'dgram',
    'dns',
    'domain',
    'events',
    'fs',
    'http',
    'https',
    'net',
    'os',
    'path',
    'perf_hooks',
    'punycode',
    'querystring',
    'readline',
    'repl',
    'stream',
    'string_decoder',
    'tls',
    'tty',
    'url',
    'util',
    'v8',
    'vm',
    'zlib'
];

for (const mod of modules) {
    let req = require(mod);

    load(req);
    load(req.prototype);
}

for (const obj of builtin) {
    load(obj);
    load(obj.prototype);
}
