//NODE VALUE AND TEXT CONTENT
// nodeValue
// textContent

// TEXT CONTENT
// Node Value, they will return you a text value that is within your element

const item = document.getElementById('special');

// You gonna get null, rememeber childNodes
// const value = item.nodeValue;
// console.log(value);

// Using childNodes, which is our node list
// console.log(item.childNodes[0].nodeValue);
// or
item.style.color = 'Blue';
const value = item.firstChild.nodeValue;
console.log(item.firstChild.nodeValue);

// TEXT CONTENT
// variable then textContent
const easyValue = item.textContent;
console.log(easyValue);
