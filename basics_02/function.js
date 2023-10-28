let price;
let totalPrice = 0;
function calculateCartPrice(...num)
{
    return num;
}

price = calculateCartPrice(20,30,40);
//console.log(price);
for(let i = 0; i < price.length; i++)
{
    //console.log(totalPrice);
    totalPrice = totalPrice + price[i];
    //console.log(price[i]);
}
console.log(totalPrice);
