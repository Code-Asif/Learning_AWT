var totalsale = 0;
var numberofsale = 0;

export function buy(buyer, item){
    buyer.total = buyer.total+item.price;
}
export function sell(item){
    totalsale = totalsale+item.price;
    numberofsale = numberofsale+1;
    item.quantity = item.quantity-1;
    return 0;
}
export {totalsale, numberofsale};
