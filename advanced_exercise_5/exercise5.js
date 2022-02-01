// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const forEach = [];
const addArray = array.forEach((num) => {
  forEach.push(num.username + "!");
}) //forEach() doesn't return anything so we have to make another array to push to. Andrei said map is better.
console.log("forEach", forEach);

//Create an array using map that has all the usernames with a "? to each of the usernames
const mapArray = array.map((num)=> {
  return num.username + "?";
}) //map() always returns something, and that something is returned as many times as the array has indices
console.log("map", mapArray);

//Filter the array to only include users who are on team: red
const filterArray = array.filter((num) => {
  return num.team === "red";
}) //filter() makes an array with all the values that are filtered out by the method. Also always returns.
console.log("filter", filterArray);


//Find out the total score of all users using reduce
const reduceArray = array.reduce((accumulate, num) => {
  return accumulate + num.score;
}, 0);
console.log("reduceArray", reduceArray);



// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	//console.log(num, i);
	//alert(num);
	return num * 2;
})
console.log("newArray", newArray);

//ANSWERS ^: 
//(1): No idea. Turns out it's a value starting at 0 and being incremented with every iteration through the array: 0, 1, 2, 3, 5, 6
//(2): Same thing without the console.log and alert I think. Those are side effects, and it's already returning something properly.

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const newUsers = array.map((nums, i) => {
  return nums.items[i] + "!";
})
console.log("newUsers", newUsers);
//duno how to do the bonus and a lil tired