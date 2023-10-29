const myNums = [10,11,2,4,5, 6];
// const newNum = myNums.map( (num)=> {
//     return num + 10;
// });
//console.log(newNum);

//chaining
const newNums = myNums.map( (num)=> num * 10).map((num)=> num+1).filter((num) => num > 40);
console.log(newNums);