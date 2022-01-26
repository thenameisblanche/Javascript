// GLOBAL SCOPE VS LOCAL SCOPE
// any variable outside code block {} is said to be in GLobal Scope
// can be accessed anywhere in the program, also modify

// Gotchas/Issues: name collissions, modify by mistake

// Global variables is modified
// Issue: variable names, A lot
let name1 = 'Blanche';
name1 = 'Blancheroo';
// let name2 = 'Jairus';
// let name3 = 'Bee';

// Issue : name is changed, to orange for example, instead of blanche
function notRelated() {
  // some code
  name1 = 'Orange';
  // function inside a function

  function innerFunction() {
    name1 = 'Inner name value';
    console.log(`This is from inner function : ${name1}`);
  }
  innerFunction();
}

notRelated();

console.log(`My name is ${name1} and this I am tired`);
