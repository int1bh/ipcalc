'use strict';

let ip = '192.168.1.35',
    mask = '255.255.255.0',
    network;

function toBinary(item) {
    let arrayItem = item.split('.');
    let arrayElement = arrayItem.map(element => {
        return parseInt(element).toString(2);
    });
    return arrayElement;
}

console.log(toBinary(ip));
console.log(toBinary(mask));

let a = parseInt(11000000, 2);
let b = parseInt(11111111, 2);

let c = a & b;

console.log(c);
