// FUNCTIONS
// reduces redundancy
// declares, invokes

//declare
function helloBlanche() {
  // logic
  console.log('Hi Blanche');
}
function helloBrio() {
  // logic
  console.log('Hi Brio');
}
function helloBee() {
  // logic
  console.log('Hi Bee');
}
// invoke
helloBlanche();
helloBrio();
helloBee();

// PARAMETERS
// declare and define
// placeholders, local variables
// argument, when invoke/call/run
// use variables, multiple params, umdefines

function greet(name) {
  console.log('Hi ' + name);
}
let name = 'Blanche';
greet(name);

greet(90);

// RETURN
// if not return, default undefined, shortcuts, ignores after

const forHeight = 80;

function calculate(value) {
  //   const newValue = value * 2.54;
  //   console.log('The value in cm is : ' + newValue + 'cm');
  return value * 2.54;
}

// assigning variable using function
const width = calculate(80);
const height = calculate(forHeight);

const dimensions = [width, height];
console.log(dimensions);
