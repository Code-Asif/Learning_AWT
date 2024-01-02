import { numberofsale, totalsale, buy, sell } from "./module1.mjs";
var buyer = {
    name:"Asif",
    total:0
};
var item = {
    name:"butter",
    price:10,
    quantity:100
};
buy(buyer, item);
sell(item);
console.log("Total expense: ",totalsale);
console.log("Number of sale: ",numberofsale);
console.log("Quantity: ",item.quantity);
