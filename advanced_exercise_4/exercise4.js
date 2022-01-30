//Solve these problems:

//#1 Create a one line function that adds adds two parameters
//ANSWER:
const oneLineFunc = (a,b) => (a+b);

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)

//ANSWER: 13?
//I thought closure was that the child function has the same scope as the parent function. I don't see that displayed here.



//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)

//ANSWER: 31
//This seems like a simple curring example. Currying is making it so we can put separate paramters, one without the other if we want.



//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)

//ANSWER: 17
//So on line 30, the 5 is "a" I believe and on line 31 the 12 is "b" (I think)



//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)

//ANSWER: On line 42 it seems 10 is a, then we use a in the add5 function (or g) so that's 15, then we use 
//15 in the add1 function (or f) so that's 16 I think. ANSWER: 16
//Composing: The output of 1 function is the input of another? This one I need more practice with


//What are the two elements of a pure function?
//ANSWER: It avoids side effects (which means it doesn't change anything outside the function and doesn't console.log anything)
//and it is deterministic which means it always returns the same results given the same inputs
