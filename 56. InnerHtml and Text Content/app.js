// INNERHTML AND TEXTCONTENT

const list = document.getElementById('first');
const div = document.getElementById('second');
const item = document.querySelector('.item');

// get the content from the element
console.log(div.textContent);
// get the whole html
console.log(list.innerHTML);
// will get the text content
console.log(list.textContent);

// const ul = document.createElement('ul');
// const li = document.createTextNode('Belate');
// ul.appendChild(li);
// document.body.appendChild(ul);
// Instead of creating a text node and appending a a child

const random = 'Blue';
const ul = document.createElement('ul');
ul.innerHTML = `<li class="item">${random}</li>
      <li>list item</li>`;
document.body.appendChild(ul);

div.textContent = 'Hello';
div.innerHTML = 'Hello, same as textContent';
// but if adding an html structure, it wont work in textCntent, it will just print all
