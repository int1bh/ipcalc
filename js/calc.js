'use strict';

let button = document.querySelector('button');
let ip, mask, network;


function toBinary(item) {
    let arrayItem = item.split('.');
    let arrayElement = arrayItem.map(element => {
        return parseInt(element).toString(2);
    });
    return arrayElement;
}


button.addEventListener('click', () => {
    event.preventDefault();
    let prefix = parseInt(document.querySelector('select').value); //CIDR диапазон
    let button = document.querySelector('button');
    let resutl = document.querySelector('.result');

    ip = document.querySelector('#ip').value,
         mask = (document.querySelector('select').selectedOptions[0].text).slice(5, -1),
         network = [];




let ipArray = toBinary(ip),
    maskArray = toBinary(mask),
    maskLastOktet = prefix;



for (let i = 0; i < 4; i++) {
    network.push(parseInt(ipArray[i], 2) & parseInt(maskArray[i], 2));
}


let totalHost = Math.pow(2, (32-maskLastOktet))-2;


let networkAddr = network.join(".");
let firsAddr = network[3]+1;
let lastAddr = network[3]+totalHost;


    prefix = parseInt(document.querySelector('select').value);
    resutl.innerHTML = `
    <p>Адрес сети ${networkAddr}</p>
    <br>
    <p>Адрес минимально возможного хоста ${firsAddr}</p>
    <br>
    <p>Адрес максимально возможного хоста ${lastAddr}</p>
    `;
});
