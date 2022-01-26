// STRING PROPERTIES
// wrapper String Object, dont memorize methods
// You can search method online

// REFRESH ABOUT OBJECTS

// let text = 'Peter Jordan';

// const person = {
//   name: 'Peter', //Property
//   greeting() {
//     //Method
//     console.log("Hi I'm Peter Loo Parker Lol");
//   },
// };

// console.log(person);

// console.log(person.name);
// person.greeting();

// STRING PROPERTIES EXAMPLE
// Count Text Length

let text = ' Blanche Peralta';
let result = text.length;
console.log(result);

// STRING METHODS EXAMPLE

// toLowerCase() or toUpperCase()
console.log(text.toLocaleLowerCase());
console.log(text.toLocaleUpperCase());
console.log(text.charAt(3));
console.log(text.charAt(text.length - 1));
// If not there, index will return -1
// If multiple same characters, will return the first one
console.log(text);
// trim() Trim the whitespace
console.log(text.trim());
// startsWith() will return true
console.log(text.startsWith(' Blanche'));

// Much Better
console.log(text.trim().toLowerCase().startsWith('blanche'));

// includes() find one or multiple character
console.log(text.includes('anche'));

// slice creates new string from sliced part
// if negative will start at end
// index 4 is not included
console.log(text.slice(0, 4));
console.log(text.slice(-5));
