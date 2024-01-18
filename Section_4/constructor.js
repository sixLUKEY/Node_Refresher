class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greet() { console.log('hello ' + this.firstName); }
}


let luke = new Person('Luke', 'Evertson');

console.log(luke['firstName']);
luke.greet();

