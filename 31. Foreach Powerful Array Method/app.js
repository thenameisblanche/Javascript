// POWERFUL ARRAY METHODS
// foreach, map, filter, find, reduce
// Iterate over array, - no for loop required
// accept CALLBACK function as an argument, calls callback against each item in an array. Reference item in the callback parameter

// SIMPLE Using FOR LOOP
// const numbers = [0, 1, 2, 3, 4];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// FOREACH
// does not return new array
// foreach, to iterate over the array, as a parameter we can acces the item

const people = [
  { name: 'Blanche', age: 20, position: 'Developer' },
  { name: 'Bee', age: 21, position: 'Doughnut' },
  { name: 'Zaffre', age: 22, position: 'Gamer' },
];

// 2 WAYS

// Passing Callback Function as a Referece, not invoking it
function showPerson(person) {
  console.log(person);
  console.log(person.position.toUpperCase());
}
// Passing Callback Function as a Referece, not invoking it
people.forEach(showPerson);

// Passing Callback function indirectly anonymously, not invokig it
people.forEach(function (item) {
  console.log(item.position.toLowerCase());
});
