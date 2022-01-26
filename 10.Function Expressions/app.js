// FUNCTION EXPRESSIONS
// Another way to define a function
// create a variable, assign to FUNCTION (not value), use var
// diff - hoisting, use - arrow func, libraries

// function, definition, declaration
function addValues(num1, num2) {
  return num1 + num2;
}

const firstValue = addValues(3, 4);
const secondValue = addValues(12, 34);

// function expression
// yopu can leave the function name, or simply delete it, you now refernce using the variable name
// No name, anonymous function
const add = function (num1, num2) {
  return num1 + num2;
};

const thirdValue = add(5, 60);
const values = [firstValue, secondValue, thirdValue, add(8, 7)];
console.log(values);

// in ES6 they came up with arrow function
// as array expressions
const multiply = (num1, num2) => num1 + num2;

// Some API uses function expression
