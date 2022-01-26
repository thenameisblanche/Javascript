// Callback Functions
// Higher Order Functions
// Functions as First Class Objects/Citizens

// Functions are first class objects - stored in a variable(expression), passed as an argument to another function, return from the function (closure)

// Higher Order Function - accepts another function as an argument or returns another function as a result

// Callback Function -passed to another function as an argument and executed inside that function

// Example 1, Simple Functions that is redundant
// function greetMorning(name) {
//   const myName = 'Bee';
//   console.log(`Good morning ${name}, my name is ${myName}`);
// }
// function greetEvening(name) {
//   const myName = 'Bee';
//   console.log(`Good Afternoon ${name}, my name is ${myName}`);
// }

// greetMorning('Blanche');
// greetEvening('Zaffre');

//Example 2, 1 Higfher Order Function, Multiple Callback Function

// Callback Functions
// the functions that we are passing, however you dont wanna invoke it, invoke it inside higher order function
function morning(name) {
  return `Good morning ${name.toUpperCase()}`;
}
function afternoon(name) {
  return `Good afternoon ${name.repeat(3)}`;
}

//Universal Function/ Higher Order Function
// Higher Order Function accepts the function (here it accepts the callback functions)
function greet(name, callback) {
  callback(name);
  const myName = 'Bee';
  console.log(`${callback(name)}, my name is ${myName}`);
}

// Pass the morning, but! dont invoke it, morning()
greet('Blanche', morning);
greet('Bee', afternoon);
