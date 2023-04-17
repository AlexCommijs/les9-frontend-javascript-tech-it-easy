//* Opdracht 1a
const tvBrands = inventory.map((invent) => {
    return invent.brand;

});
console.log(tvBrands);


//* Opdracht 1b
const soldOut = inventory.filter((invent) => {
    return invent.originalStock === invent.sold
})
console.log(soldOut)



//* Opdracht 1c
const tvAmbilight = inventory.filter((invent) => {
    return invent.options.ambiLight
})
console.log(tvAmbilight)


//* Opdracht 1d
inventory.sort((a, b) => {
    if(a.price > b.price) {
        return 1;
    }else if(a.price < b.price) {
        return -1;
    }else {
        return 0;
    }
})
console.log(inventory)
