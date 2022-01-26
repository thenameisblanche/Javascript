// DOM INTRO
// Interact with elements in the webpage
// Select Elements
// Traverse DOM
// Insert/Remove Elements
// Apply Styling
// Add/Remove CSS Classes

// When we write our HTML, and view it in the browser, browser turns it into a document object model, and in the DOM, each element becomes an object or node, we use built in methods to interact with these nodes using javascript

// DOM GENERAL CONCEPTS
// Similar to CSS
// SELECT the element or group of elements you want to affect
// Decide the effect you want to apply to the selection

// DOM has many different ways how to work with elements

// 1.SELECT THE DOM, then apply changes right away
// document.(then)body.(the).style.(then)property;
document.body.style.backgroundColor = 'cyan';
document.body.style.border = '2px red solid';
document.body.style.color = 'green';

document.getElementById('btn').style.color = 'red';

//2.ASSIGN TO A VARIABLE
const element = document.getElementById('btn');
// do something

document.querySelector('element');
// do something

//Once we set up our javascript file,once we include the property in our index html, we have acces to a global window object
// Global Window Object
// In Window Object there're multiple properties and methods that you can work with, one of those is document property, which is a giant object itself, within document, we have access to methods and other properties
// console.log(window);

// Once we select any element, what we're getting back is a node object or a node list which is an array like object, almost like array, but not quite

// Onec you select an element and assign it to a variable, you have access to that element
const bton = document.getElementById('btn');
console.log();

// Once we have access to our node object, we can do what we like
// nodeName property, know the name of the node
const name = btn.nodeName;
console.log(name);

const css = btn.style;
console.log(css);
