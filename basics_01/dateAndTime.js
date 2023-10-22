let myDate = new Date();
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString('en-PK'));
// console.log(myDate.toLocaleString('en-PK'));
// console.log(myDate.toUTCString());
console.log(typeof(myDate.toDateString()));
console.log(myDate.toLocaleDateString('en-PK'));

// let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString());
let myCreatedDate = new Date("01-23-2023");
console.log(myCreatedDate.toDateString());
let myTimeStamp = Date.now();
console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.ceil(myTimeStamp/1000));
myDate.toLocaleString('default', {
    weekday: 'long'
})
console.log(myDate);