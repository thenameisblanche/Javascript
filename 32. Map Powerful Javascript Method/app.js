// MAP
// does not return a new array
// does not change size of original array, if array has 3 items, then new array also has 3 items
// uses values from original array when making a new one

// Youll use map alot
const people = [
  { name: 'Blanche', age: 20, position: 'Developer' },
  { name: 'Bee', age: 21, position: 'Doughnut' },
  { name: 'Zaffre', age: 22, position: 'Gamer' },
];

// const names = people.forEach(function () {});
// console.log(names);

//Map will make a new array
// It always depends on the original array
const ages = people.map(function (person) {
  console.log(person);
  // return 'Ciao!';
  // console.log(person.age); WHY IS THIS NOT WORKING?
  return person.age + 2;
  // this returns a single value
});

// Map will make  a new array, this time, it holds objects
const newPeople = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age,
  };
});

// Rememeber, You can take the original array, and make whatever modifications you want

// Pulling names and placing it in heading 1
const names = people.map(function (person) {
  return `<h1>${person.name}</h1`;
});

// Using DOM
document.body.innerHTML = names.join('');

console.log(ages);
console.log(newPeople);
console.log(names);
