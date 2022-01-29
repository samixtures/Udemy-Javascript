// change everything below to the newer Javascript!

// let + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';

//ANSWERS ^: 
const a = 'test';
let b = true;
let c = 789;
a = 'test2';


// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};


var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

//ANSWERS ^
//bruh insanely short syntax for getting variables to have the same values as object properties (properties are variables inside objects, whereas methods are functions inside objects or classes too I think)
const { firstName, lastName, age, eyeColor } = person;


// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};

//ANSWERS ^ 
//kinda weird ngl maybe i'll understand the purpose of it more the more I do it.
const okObj = {
    [a]: 'test',
    [b]: true,
    [c]: 789
}

//Actually if we just want to put those variables as properties by themselves the answer is:
const okObj = {
    a,
    b,
    c
}
//simple, instead of saying a:a we can just put a and it will know that we want it as a property


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

//ANSWER:
let message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;


// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

//ANSWER? ^:
function isValidAge(age=10) {
    return age;
}
//So variable age doesn't really exist, but this function still returns 10 and that's what default arguments/paramters do basically.


// Symbol
// Create a symbol: "This is my first Symbol"

//ANSWER ^:
let symbol = Symbol();
let symbol1 = Symbol('foo');
// He said symbols won't be super common but can be useful when making many properties in an
//object and you don't want to accidentally make identical properties because that will cause errors I think he said



// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

//ANSWER ^:
const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    }   else {
            return "I am totally lost!";
        }
}