const logger = require("./logger");

class Shopper{
    constructor(name, money = 0)
    {
        this.name = name;
        this.money = money;
        logger.log(`Shopper ${name} has ${money} money`);
    }
}

module.exports = Shopper;