// EXERCISE CALCULATE TOTAL
// Functions, return, if, arrays, for loop

const gas = [20, 30, 50];
const food = [20, 80, 90];

function calculateTotal(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  if (total > 100) {
    console.log('You are spending way too much you little prick!');
    return total;
  }
  console.log('You ok. Fart');
  //   console.log(`Total is ${total}`);
  return total;
}

// You are passing an array
// calculateTotal(gas);
// If you pass a string, It will read string and return array
// calculateTotal('Hi Blanche');

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([100, 200, 300]);

// You console log it thrice, but you can also use object

console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal,
});

// You can pass any array in the method, and it will behave the same
