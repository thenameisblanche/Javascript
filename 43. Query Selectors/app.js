// QUERY SELECTORS
// Select the element or group of elements that we want
// Decide the effect that we want to aplly to the selection

// querySelector('any css') - selects single
// querySelectorAll('any css) - selects all

// we can pass in any css, simple id or class, or complicated selectors
// with queryselectorall we can use foreach method

const result = document.querySelector('#result');
result.style.color = 'green';

// With query selector we're only selecting the first element
const item = document.querySelector('.special');
console.log(item);

const lastItem = document.querySelector('li:last-child');
console.log(lastItem);

// Select all list

const list = document.querySelectorAll('.special');
console.log(list);

list.forEach(function (whatever) {
  console.log(whatever);
  whatever.style.color = 'yellow';
});
