//*Opdracht 4a
const nameTv = inventory.find((invent) => {
    return invent.type === '43PUS6504/12';
});

console.log(nameTv)


//*Opdracht 4b
const priceTv = inventory.find((invent) => {
    return invent.price === 159;
});

console.log(priceTv)


//*Opdracht 4c
function getSizeTv() {
    for (let i = 0; i < inventory.length; i++) {
        return `${inventory[i].availableSizes} inch (${inventory[i].availableSizes * 2.54} cm) |`;

    };
};
console.log(getSizeTv());
