// Object Properties and Methods

let obj = {
    greet: "Hello"
}

console.log(obj.greet);
console.log(obj['greet']);

let property = 'greet';
console.log(obj[property])


// Funtions and Arrays
let arr = [];

arr.push(function(){
    console.log('Hello world 2')
});
arr.push(function(){
    console.log('Hello world 3')
});
arr.push(function(){
    console.log('Hello world 4')
});

arr.forEach((item) => item());