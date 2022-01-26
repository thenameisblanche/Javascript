// REMOVE AND REMOVE CHILD
// remove and removeChild

const result = document.querySelector('#result');

// This will remove the element with #result dynamically. The code is still there, but is remove in the page.
// result.remove();

// remove the child in element that has #result
// result.querySelector('h1') will only look for h1 inside the result element
const heading = result.querySelector('h1');
result.removeChild(heading);
