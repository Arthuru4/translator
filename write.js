#!/usr/bin/env node

var fs = require('fs');
var a = JSON.parse(fs.readFileSync('translator.json'));

!function write() {
    if (typeof (process.argv[2]) === 'string' && process.argv[2].includes(':')) {
        let asass = process.argv[2].split(':');
        asass.forEach((el, i) => {
                if (el[i].length) asass[i] = el.replace(/^\s*|\s*$/g, '')
                else throw(new Error('Not correct string!!'))
            }
        );

        let b = {[asass[0].toLowerCase()]: asass[1].toLowerCase()};

        fs.writeFileSync('translator.json', JSON.stringify(Object.assign(a, b)))
    }
}();
