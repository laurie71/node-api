var node = module.exports = { process: process };

var api = [
    'assert', 'buffer', 'child_process', 'console', 'constants', 'crypto',
    'dgram', 'dns', 'events', 'freelist', 'fs', 'http', 'https', 'module',
    'net', 'os', 'path', 'querystring', 'readline', 'repl', 'stream',
    'string_decoder', 'sys', 'timers', 'tls', 'tty', 'tty_posix', 'tty_win32',
    'url', 'util', 'vm'
];

api.forEach(function(name) {
    Object.defineProperty(node, name, {
        enumerable: true,
        configurable: true,
        get: mkRequire(name)
    });
});

function mkRequire(name) {
    return function lateRequire() {
        var m = require(name);
        //node[name] = m;
        Object.defineProperty(node, name, {
            enumerable: true,
            value: m
        });
        return m;
    }
};

