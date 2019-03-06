#!/usr/bin/env node

var fs = require('fs');
var a = JSON.parse(fs.readFileSync('translator.json'));

console.log(a);
