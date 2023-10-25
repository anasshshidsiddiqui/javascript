const JsObject = {
    name: "Anas",
    "full name": "Anas Shahid",
    email: "anas@gmail.com",
    isLogedIn: false,
    logedinDays: ["Monday", "Saturday"],
    //[mySum]: "myKeys"
}

console.log(JsObject.logedinDays);
console.log(JsObject["full name"])
//Object.freeze(JsObject);
JsObject.email = "misha@gmail.com";
console.log(JsObject);
JsObject.greating = function()
{
    console.log(`Hello ${this.email}`);
}
console.log(JsObject.greating());