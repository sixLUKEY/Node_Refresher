function Person( firstName, lastName ){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greet = function(){ console.log('hello ' + this.firstName) };

let luke = new Person('Luke', 'Evertson');

console.log(luke['firstName']);
luke.greet();

