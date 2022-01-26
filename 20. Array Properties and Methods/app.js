// ARRAY PROPERTIES AND METHODS
let names = ['Blanche', 'Jairus', 'Brio', 'Zaffre'];

// ARRAY PROPERTIES
// length
console.log(names.length);
console.log(names.length - 1);

// concat
const lastNames = ['Churrios', 'Donatos', 'Bread', 'GarlicBred'];
// This will concatenate these lastNames into the names array
const allNames = names.concat(lastNames);
console.log(allNames);

// METHODS

// reverse()
console.log(allNames.reverse());

// unshift(), Donatos and Anna will be placed in first
allNames.unshift('Donatos');
allNames.unshift('Anna');
console.log(allNames);

// shift() will remove the first items
allNames.shift();
allNames.shift();
allNames.shift();
console.log(allNames);

// push() will add on the end
allNames.push('Ubet');
console.log(allNames);

// pop() will remove on the end
allNames.pop();
console.log(allNames);

// splice(index, how many) grab specific arrays in the array - mutates original array
const specificNames = allNames.splice(3, 2);
console.log(allNames);
