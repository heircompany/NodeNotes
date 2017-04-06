const util = require('util');

function Person() {
    this.firstname = 'Joe';
    this.lastname = 'Grotto';
}

Person.prototype.greet = function() {
    console.log(`HELLO THERE ${this.firstname} ${this.lastname}!`);
}

// new object with access to person properties
function Policeman() {
    // run the Person function, pass in values
    Person.call(this);
    this.badgenumber = '1234';
}

// link the PROTOTYPE objects in prototype chain
util.inherits(Policeman, Person);
// Policeman will CALL the new empty Object
const officer = new Policeman();
officer.greet();
