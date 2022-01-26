// NAVIGATE THE DOM - CHILDREN

// Select the element or group of elements that we want
// Decide the effect we want to apply to the selection

// childNodes - returns all childNodes including whitespace which is treated as a text code

// children
// firstChild
// lastChild

// Traversy? DOM Tree

// Navigate DOM Tree without using the method

const result = document.querySelector('#result');

// Select children using childNodes, it will return all includign whitespace, treated as text node

const allChildren = result.childNodes;
// console.log(allChildren);

// Using children only
const children = result.children;

console.log(children);
// You can see their indexes
console.log(children[2]);

// The problem with firstChild and lastChild
// both will be text
console.log(result.firstChild);
console.log(result.lastChild);
