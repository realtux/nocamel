const define = (native, name, originalName) => {
    const properties = {
        configurable: false,
        enumerable: false,
    };

    if (typeof native[originalName] === 'function') {
        properties.value = native[originalName];
    } else {
        properties.get = () => native[originalName];
    }

    Object.defineProperty(native, name, properties);
};

const load = (object) => {
    try {
        for (const property of Object.getOwnPropertyNames(object)) {
            if (property.toUpperCase() === property) continue;
            const snakeCased = property.replace(/[A-Z]+/g, (c, i) => i === 0 ? c + '_' : '_' + c).toLowerCase();
            if (snakeCased in object) continue;
            define(object, snakeCased, property);
        }
    } catch(e) {
        // these errors are mostly objects that don't have a prototype
        //console.log(e)
    }
};

const builtin = [
    'Object',
    'Function',
    'Array',
    'Number',
    'Boolean',
    'String',
    'Symbol',
    'Date',
    'Promise',
    'RegExp',
    'Error',
    'EvalError',
    'RangeError',
    'ReferenceError',
    'SyntaxError',
    'TypeError',
    'URIError',
    'JSON',
    'Math',
    'Intl',
    'ArrayBuffer',
    'Uint8Array',
    'Int8Array',
    'Uint16Array',
    'Int16Array',
    'Uint32Array',
    'Int32Array',
    'Float32Array',
    'Float64Array',
    'Uint8ClampedArray',
    'DataView',
    'Map',
    'Set',
    'WeakMap',
    'WeakSet',
    'Proxy',
    'Reflect',
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

load(global);

for (const obj of builtin) {
    load(global[obj]);
    load(global[obj].prototype);
}

for (const mod of modules) {
    req = require(mod);

    load(req);
    load(req['prototype']);
}
