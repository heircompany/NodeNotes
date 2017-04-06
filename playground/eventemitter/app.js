'use strict';

// es6 version of function constructors / prototype chain
// REMEMBER IT IS SYNTACTIC SUGAR!!!!
// REMEMBER HOW IT WORKS FUNDAMENTALLY
// IT'S A CONSTRUCTOR FUNCTION
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet() {
        console.log(`hello ${this.firstname} ${this.lastname}!`);
    }
}

const joe = new Person ('Joe', 'Grotto');
joe.greet();
const scott = new Person ('Scott', 'Grotto');
scott.greet();

console.log(joe.__proto__);
console.log(scott.__proto__);
console.log(joe.__proto__ === scott.__proto__);
