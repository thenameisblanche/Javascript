// TEMPLATE LITERALS - arrived with ES6+, latest javascript
// Backtick Characters `` - above tab
// Interpolation ${} - insert expression value

// Basic
const name = 'Blanche';
const age = 25;
const sentence =
  "Hey it's your boy " + name + 'and he is ' + age + ' years old';
console.log(sentence);

// Template Literals
const newsentence = `Hey it's your boy  ${name} and he is ${age} years old`;

console.log(newsentence);
