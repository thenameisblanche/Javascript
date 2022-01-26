// CREATE ELEMENT, CREATE TEXT NODE, ELEMENT APPEND
// createElement.('element');
// createTextNode('text content');
// element.appendCHild(childElement)

// Add Elements dynamically
// replaceChild('new','old')

const result = document.querySelector('#result');
const first = document.querySelector('.red');

// Create a new eleemnt, assign it to a variable, append this to the body

// Create empty elemnt

const bodyDiv = document.createElement('div');

//create text node
// Append the text first to the div

const text = document.createTextNode('a simple body div');

// This will glue the text to the body div
bodyDiv.appendChild(text);

// This will add a simple body dive before the result element
document.body.insertBefore(bodyDiv, result);

// create element in result
const heading = document.createElement('h2');
const headingText = document.createTextNode('Dynamic Heading');
heading.appendChild(headingText);
heading.classList.add('blue');

result.insertBefore(heading, first);

// Replace Child
const smallHeading = document.createElement('h6');
const smallText = document.createTextNode(' I am small heading text');

smallHeading.classList.add('red');
smallHeading.appendChild(smallText);
document.body.replaceChild(smallHeading, bodyDiv);

console.log(result.children);
