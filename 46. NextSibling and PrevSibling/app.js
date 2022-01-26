// previousSibling
//nextSibling
// returns whitespace

const first = document.querySelector('.first');
console.log(first);

// Look for the next sibling
const second = (first.nextSibling.nextSibling.style.color = 'red');
// It's gonna return whitespace, add 1 more .nextSibling
console.log(second);

// previousSibling
const last = document.querySelector('#last');
console.log(last);

const third = (last.previousSibling.previousSibling.style.color = 'blue');
console.log(third);

// if you gonna look for the sibling that doesnt exist you gonna get null
