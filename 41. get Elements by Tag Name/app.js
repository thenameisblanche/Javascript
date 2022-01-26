// GET ELEMENTS BY TAG NAME
// Select the Elements or group of elements that we want
// Decide the effect we want to apply to the selection

// getElementsByTagName('tagname);
// will return a node-list , an array-like object
// index, length property, but not array methods

const headings = document.getElementsByTagName('h2');
// will return a node list, it looks like array
// u can select elememts using the index
// u can also get the length property
// however, it's difficult to run the array methods
console.log(headings);

// first h1 will be affected
headings[0].style.color = 'red';

// check out the length property
// console.log(headings.length);

// With array properties it's gonna fail
// item-foreach is not a function. since it's not an array and foreach is an array function
const items = document.getElementsByTagName('li');
// items.foreach(function (item) {
//   console.log(item);
// });

// You can use for loop or transform node-list
const betterItems = [...items];
betterItems.forEach(function (item) {
  console.log(item);
});

items[2].style.color = 'blue';

console.log(items);
console.log(betterItems);
