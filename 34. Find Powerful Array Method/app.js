// FIND
// returns single instanc -(in this case, object)
// returns first match, if no match undefined
// great for getting unique value
// Useful for ids
const people = [
  { name: 'Blanche', age: 20, position: 'Developer', id: 1 },
  { name: 'Bee', age: 21, position: 'Doughnut', id: 2 },
  { name: 'Zaffre', age: 22, position: 'Gamer', id: 3 },
];

// Simpler
const names = ['Bee', 'Boo', 'Bay'];

console.log(
  names.find(function (name) {
    return name === 'Bee';
  })
);

// Find
// This will output object
const person1 = people.find(function (person) {
  return person.id === 3;
});

console.log(person1);

// Filter
// This will output array
const person2 = people.filter(function (person) {
  return person.id === 3;
});

console.log(person2);
// If you wanna access the property
console.log(person2[0].name);
