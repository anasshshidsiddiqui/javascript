const logger = require("./logger");

class Store{
    constructor(name, invertory = [])
    {
        this.name = name;
        this.invertory = invertory;
        logger.log(`Store ${name} has ${invertory.length} in stock`);
    }
}

module.exports = Store;