const greet = require('./greet');
greet();

// objects are just name value pairs, the rest is just words
const person = {
    firstName: "Joe",
    lastName: "Grotto",
    greet: function() {
        console.log(`hey! I'm ${firstName} ${lastName}`);
    }
};
// dot vs string
person.greet();
console.log(person['firstName']);

function Person(firstName, lastName) {
    this.lastName = firstname;
    this.lastName = lastname;
}
// Person.prototype refers to any objects constructed from Person object, making its functions
// available to other objects created by the prototype object
Person.prototype.greet = function() {
    console.log(`Hello ${firstname} ${lastname}`);
};
let joe = new Person('Joe', 'Grotto');
let joey = new Person('Joe', 'Grotto');
console.log(joe.Person);
console.log(joe.__proto__);
console.log(joey.__proto__);
// same function constructor?
console.log(joe.__proto__ === joey.__proto__);


//pass by value
//change function is storing a and b seperately
function change(b) {
    b = 2;
}
let a = 1;
change(a);
console.log(a);

//pass by reference with Object
//change/add properties and methods that can be used outside function
function changeObj(d) {
    d.prop1 = function() {};
    d.prop2 = {};
}
let c = {};
c.prop1 = {};
changeObj(c);
console.log(c);

// function expression instead of a statement --> invoke as an object
let firstname = "joey";
//Immediately invoked function expressions have their own SCOPE
(function () {
    const firstname = "joe";
    console.log(firstname);
}());
// with values
(function (lastname) {
    const firstname = "joe";
    console.log(firstname);
    console.log(lastname);
}('Grotto'));


console.log(firstname);
