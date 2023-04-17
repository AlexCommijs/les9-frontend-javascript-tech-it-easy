//* Opdracht 2a
let tvSold = 0;
inventory.forEach((invent) => {
    return tvSold += invent.sold;
});

console.log(tvSold);


//* Ik heb gepropbeerd met de reduce Array method maar dat lukt mij niet zo.
/*
let getValue = 0;

    const alreadySold = inventory.reduce((a, b) => {
    return a + b.sold, getValue;
})
console.log(alreadySold)
*/


//* Opdracht 2b
document.getElementById('tv-sold').innerHTML = `Already sold: ${tvSold}`;


//* Opdracht 2c
let tvBought = 0;
inventory.forEach((invent) => {
    return tvBought += invent.originalStock;
});

console.log(tvBought);


//* Opdracht 2d
document.getElementById('tv-bought').innerHTML = `Bought in the first place: ${tvBought}`;


//* Opdracht 2d
const tvSell = tvBought - tvSold;

console.log(tvSell);

document.getElementById('tv-sell').innerHTML = `Yet to sell: ${tvSell}`;

