
/*Баскетболни кецове – цената им е 40% по-малка от таксата за една година

• Баскетболен екип – цената му е 20% по-евтина от тази на кецовете

• Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип

• Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка */


function basketballЕquipment(input) {

let  yearTax= Number(input[0]);
let basketShoes = yearTax - (yearTax * 0.40);

let basketClothes =  basketShoes - (basketShoes * 0.20);
let ball=  basketClothes * 0.25;
let basketAcessoar = ball * 0.20;

let total =  yearTax + basketShoes + basketClothes + ball + basketAcessoar ;


console.log(total);
}

basketballЕquipment(["365 "]);