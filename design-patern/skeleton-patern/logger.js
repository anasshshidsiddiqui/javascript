class logger{
    constructor()
    {
        this.logs = [];
    }

    get count()
    {
        this.logs.length;
    }

    log(message)
    {
        const timestamp = new Date().toISOString();
        this.logs.push({message, timestamp});
        console.log(`${message} - ${timestamp}`);
    }
}

module.exports = new logger();