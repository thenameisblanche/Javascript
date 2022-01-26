// EXERCISE FULL NAME
// Array and For Loop

const names = ['Blanche', 'Jairus', 'Brio', 'Zaffre'];
const lastName = 'Beluga';

let newArray = [];

for (let i = 0; i < names.length; i++) {
  newArray.push(`${names[i]} ${lastName}`);
}
console.log(newArray);
