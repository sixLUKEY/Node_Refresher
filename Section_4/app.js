function greet(){
    console.log('hello hi')
}

greet();

// Functions are first class, can be passed around like variables

function logGreeting(fn){
    fn();
}

logGreeting(greet);

// Function expression
let greetMe = () => console.log('hi');


greetMe();

// It's still first-class
logGreeting(greetMe);

logGreeting(() => {
    console.log('Hello Lucas!');
});