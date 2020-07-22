'use strict';

let ip = '192.168.1.66',
    mask = '255.255.255.128',
    network = [];

function toBinary(item) {
    let arrayItem = item.split('.');
    let arrayElement = arrayItem.map(element => {
        return parseInt(element).toString(2);
    });
    return arrayElement;
}

let ipArray = toBinary(ip),
    maskArray = toBinary(mask),
    // maskLastOktet = parseInt(parseInt(maskArray[3], 2));
    maskLastOktet = 25;

console.log(maskLastOktet);

network[0] = parseInt(ipArray[0], 2) & parseInt(maskArray[0], 2);
network[1] = parseInt(ipArray[1], 2) & parseInt(maskArray[1], 2);
network[2] = parseInt(ipArray[2], 2) & parseInt(maskArray[2], 2);
network[3] = parseInt(ipArray[3], 2) & parseInt(maskArray[3], 2);

let totalHost = Math.pow(2, (32-maskLastOktet))-2;
console.log(totalHost);

let networkAddr = network.join(".");
let firsAddr = network[3]+1;
let lastAddr = network[3]+totalHost;

console.log(`Адрес сети ${networkAddr}`);
console.log(`Адрес минимально возможного хоста ${firsAddr}`);
console.log(`Адрес максимально возможного хоста ${lastAddr}`);



// console.log(Math.pow(2 , (32-29)));

// console.log(ipArray);
// console.log(maskArray);

// let a = parseInt(11000000, 2);
// let b = parseInt(11111111, 2);

// let c = a & b;

// console.log(c);
