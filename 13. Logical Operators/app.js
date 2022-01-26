// CONDITIONAL STATEMENTS
// >, <,>=,<=,==,===,!=,!===

if (true) {
  console.log('hello world');
}
if (2 > 1) {
  console.log('hello world');
}
// Code wont run if false
const variable1 = true;
if (variable1) {
  console.log('hello world');
}
// Value is boolean
const variable2 = 2 > 3;
if (variable2) {
  console.log(typeof variable2);
} else {
  console.log(typeof variable2);
}

// >=, <=
const num1 = 4;
const num2 = 6;
const ifelse = num1 >= num2;
if (num1 > num2) {
  console.log('First Number is Bigger than Second');
} else if (ifelse == true) {
  console.log('First Number is equal to second');
} else {
  console.log('Second Number is Bigger than First');
}

// !=
if (num1 != 5) {
  console.log('Number is not equal to 5');
}

// == checks only value
// === check value and type

const check2equal = num1 == 4;
const check3equal = num2 === '6';

if (check2equal) {
  console.log(check2equal);
}
// 6 is a string
if (check3equal) {
  console.log(check3equal);
}

// LOGICAL OPERATORS
// !
// || OR
// && AND

//  You know this blanche
