let logger = require("./logger");
let Shopper = require("./shopper");
let Store = require("./store");

logger.log("starting app");

let alex = new Shopper("alex", 500)
let shi_shop = new Store("Steep and Deep Supplies", [
    {
        item: "Downhill Skis",
        qty: 5,
        price: 750,
    },
    {
        item: "Knit Hat",
        qty: 20,
        price: 5,
    }
])

logger.log("finished config...");

console.log(`${logger.count} logs total`);
logger.logs.map((log) => console.log(`   ${log.message}`));