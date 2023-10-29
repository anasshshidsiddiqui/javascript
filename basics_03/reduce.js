const arr = [1,2,3];
const myArr = arr.reduce((eccumulator,currentValue)=>{
    //console.log(`eccumulator ${eccumulator} and currentValue: ${currentValue}`);
    return eccumulator + currentValue;
}, 0);

// console.log(myArr);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalCartPrices = shoppingCart.reduce( (accumulator, item)=> item.price + accumulator,0);
console.log(totalCartPrices);