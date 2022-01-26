// GET ELEMENTS BY CLASS NAME

// Select the element or group of elements that we want
// Decide the effect that we want to apply to the selection

// getElementByClassName('classname');

// node-list = array-like object
// index, length property bt not array methods

// same like tag names, bec we are selecting multiple, we are getting node list
// 0 index based
const listItems = document.getElementsByClassName('special');
console.log(listItems);

listItems[1].style.color = 'blue';
