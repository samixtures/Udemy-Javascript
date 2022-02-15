// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

//ANSWERS^:
// turtle.padStart(9);
// rabbit.padStart(9);
// Initially I tried this^ but it didn't change anything.

turtle = turtle.padStart(9);
rabbit = rabbit.padStart(9);

//another way we can do it is turtle = turtle.padStart(9, ' ');
//"pad.start()" can take 2 arguments: 1 being the length of how long the new string will be
//the other is what characters to add at the beginning of the string to pad it to the  new length

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);



// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart

turtle = turtle.trim().padEnd(9, '=');
//The second paramter pads the string with the string in the second argument
//If we don't have a second paramter, then it will assume the second string is a space " "
//Additionally, the trim() method removes whitespace from a string

//ANSWER ^:  When we run the command, I think the current turtle will lose all its 
//spaces in the beginning and then = signs added at the end, making the whole string still 9 chars
//OUTPUT: '🐢=======' 
//NIceeeeeeeeeeeee


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

const newObj = Object.entries(obj).map(value => {
  return value[1];
}) //This makes an array that has only the value

Object.entries(obj).map(value => value.join(" ")).join(' ')
//This is the answer ^. I'm not super familiar with the join function

//Looks like we have to remove the attribute names and add the attribute values together.

//Object.entries(obj) converts an object to an array with multiple arrays in it. 
//So obj becomes [[my, name], [is, Rudolf], [the, raindeer]]
//We the use the map method which creates a new array that with the function we use 
//Object.entries(obj).map((value =>){
//   return value[1]
//}
//Then we have to use the map and join function (ok I looked at the solution)

//
