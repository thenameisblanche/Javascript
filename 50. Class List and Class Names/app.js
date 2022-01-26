// CLASS LIST AND CLASS NAME

// Class name will check class name and change and add new class name

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

const classValue = first.className;
// console.log(classValue);

// Add className
// this will override the current class name
second.className = 'colors';

// Add classList, will add list of classes
// third.classList.add('colors');
// third.classList.add('text');

third.classList.add('text', 'colors');

// remove a class
third.classList.remove('text');

// check whether the particular element have that class
let result = third.classList.contains('colors');

if (result) {
  console.log(true);
} else {
  console.log('No');
}

const classList = third.classList;
console.log(classList);
