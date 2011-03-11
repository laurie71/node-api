node-api: lazy-require core modules
===================================

This is a trivial module that enables you access core Node modules without
the need to require() them. It exports a single object with properties 
corresponding to the core module names. The properties perform a require() 
the first time they are accessed.

Installation
------------

    npm install node-api

Usage
-----

In any module:

    var node = require('node-api');
    node.util.debug('done! :-]');

License
-------
MIT licensed; see LICENSE.txt for full text.
