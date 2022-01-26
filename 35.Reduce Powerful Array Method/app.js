// REDUCE
// Special, can replace map and filter, but is also challenging
// iterates, callback function
// reduces to a single value - number, array, object
// 1 parameter ('acc') - total of all calculations
// 2 parameter ('curr') - current iteration/value

const people = [
  { name: 'Blanche', age: 20, position: 'Developer', id: 1, salary: 200 },
  { name: 'Bee', age: 21, position: 'Doughnut', id: 2, salary: 200 },
  { name: 'Zaffre', age: 22, position: 'Gamer', id: 3, salary: 200 },
];

// decide what value you'll return
const total = people.reduce(function (accumulator, currentItem) {
  console.log(`Total is ${accumulator}`);
  console.log(`Current Money: ${currentItem.salary}}`);
  accumulator += currentItem.salary;
  // Always return the accumulator
  return accumulator;
}, 1000);
// 1000 is the initial value

console.log(`Total Money is ${total}`);
