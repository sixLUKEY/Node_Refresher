class Greeter {
    constructor() {
        this.greeting = "Oh hi";
    }
    static greet(x){
        console.log(x.greeting);
    }
}

module.exports = Greeter;