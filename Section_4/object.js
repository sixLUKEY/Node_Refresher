let person = {
    firstName: 'Luke',
    lastName: 'Evertson',
    greet: function( ) {
        console.log(`Hello ${this.firstName} ${this.lastName}`)
    },
    alsoGreet: () => {
        console.log(`Hello ${person.firstName} ${person.lastName}`)
    }
};

person.greet();
person.alsoGreet();