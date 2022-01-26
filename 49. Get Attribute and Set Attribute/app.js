// GET ATTRIBUTE AND SET ATTRIUBUTE
// getAttribute()
// setAttribute()

// atribute example html, class, id and so on
// we can get those and set those
const first = document.querySelector('.first');
// Will get 'first' from  class ='first'
const classValue = first.getAttribute('class');
console.log(classValue);

// Will get 'special' from  class ='special'
const idValue = first.getAttribute('id');
console.log(idValue);

const link = document.getElementById('link');
console.log(link);

// href attribute is = to first.html
const showLink = link.getAttribute('href');
console.log(showLink);

//id attribute is = to link
const showLinkId = link.getAttribute('id');
console.log(showLinkId);

// DYNAMICALLY SET THE ATTRIBUTE
// navigate through the dom without and queryselector and getId

const last = link.nextElementSibling;
// ('attribute','value')
last.setAttribute('class', 'first');
last.textContent = 'I also have a class of first';
console.log(last);

const links = document.querySelectorAll('.first');
console.log(links);
