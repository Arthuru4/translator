#!/usr/bin/env node

var fs = require('fs');
var a = JSON.parse(fs.readFileSync('translator.json'));

let arg = process.argv[3] ? getArgs() : process.argv[2];

!function back() {
    let indexValue;
    if (!a[arg.toLowerCase()])
        indexValue = ~Object.values(a).indexOf(arg) ? Object.values(a).indexOf(arg) :
        Object.values(a).indexOf(arg.toLowerCase());

    debugger;
    if (a[arg.toLowerCase()]) console.log(a[arg.toLowerCase()]);

    else if (~indexValue && Object.values(a).indexOf(arg))
        console.log(Object.keys(a)[indexValue]);

    else if (~indexValue && Object.values(a).indexOf(arg.toLowerCase()))
        console.log(Object.keys(a)[indexValue].toLowerCase());
    else
        console.log("Не существует аналогов, добавьте их в список командой ***пример:'node write ебать:секс'");
}();

function getArgs() {
    return process.argv.slice(2).join(' ');
}
