// CREATE ELEMENT, CREATE TEXT NODE, ELEMENT APPEND
// createElement.('element');
// createTextNode('text content');
// element.appendCHild(childElement)

// Add Elements dynamically

const result = document.querySelector('#result');

// Create a new eleemnt, assign it to a variable, append this to the body

// Create empty elemnt

const bodyDiv = document.createElement('div');

//create text node
// Appened the text first to the div

const text = document.createTextNode('a simple body div');
bodyDiv.appendChild(text);
document.appendChild(headingText);

// create eleemnt in result
const heading = document.createElement('h2');
const headingText = document.createTextNode('Dynamic Heading');

heading.appendChild(headingText);
heading.classList.add('blue');

result.appendChild(heading);
console.log(result.children);
