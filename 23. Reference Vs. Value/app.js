// REFERENCE VS VALUE
// Primitive Data TYpes
// String, Number, Symbol, Boolean, Undefined, Null
// Arrays, Functions, Objects = object
// typeof

// When assigning primitive data type value to a variable any changes are made directly to that value, without affecting the original value

// when assigning non-primitve data type value to a variable is done by a reference so any changes will affect all reference

const num1 = 1;
let num2 = num1;
num2 = 8;
console.log(`the first number is ${num1}`);
console.log(`the second number is ${num2}`);

let person1 = { name: 'Blanche' };
let person2 = person1;
person2.name = 'Bee';
// This will change Blanche to Bee, Because of Non-Primitive Data Types
// To avoid, use a copy
// let person2 = {...person1};
console.log(`The name of the first person is ${person1.name}`);
console.log(`The name of the first person is ${person2.name}`);
