// PARENT ELEMENT

// Body is the parent element to all
// Html is the parent element to the body

// using parentElement Method
const heading = document.querySelector('h2');
// console.log(heading.parentElement.parentElement);
// you can parent element until null

const parent = heading.parentElement;
parent.style.color = 'red';
