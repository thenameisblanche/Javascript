// OBJECTS
// Objects, key/value pairs methods
// dot notation

// var = { }, an object in javascript
// im ES6, you can do greeting() right away
const person = {
  name: 'Blanche',
  lastName: 'Peralta',
  age: 40,
  education: true,
  married: false,
  siblings: ['sil', 'del', 'pig'],
  greeting: function () {
    console.log('Hi, Me is Blanche');
  },
};

console.log(person.name);
console.log(person.siblings[2]);
person.greeting();

// Use Variables
const age = person.age;
console.log(age);

// Change Values
person.name = 'Bee';
