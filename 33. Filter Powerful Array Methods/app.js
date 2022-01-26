// FILTER
// does return a new array
// can manipulate the size of new array
// returns based on condition

const people = [
  { name: 'Blanche', age: 20, position: 'Developer' },
  { name: 'Bee', age: 21, position: 'Doughnut' },
  { name: 'Zaffre', age: 22, position: 'Gamer' },
];

// Decide which you want to choose
const youngPeople = people.filter(function (person) {
  return person.age <= 25;
});

console.log(youngPeople);

const developers = people.filter(function (person) {
  return person.position === 'Developer';
});

console.log(developers);
