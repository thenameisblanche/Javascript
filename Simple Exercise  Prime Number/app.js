// const num = 13;

// const determineIfPrime = (num) => {
//   for (let i = 2; i < num; i++) {
//     if (Number(num) === num && num % 1 !== 0) {
//       return 'hello';
//     }
//   }
// };
// console.log(determineIfPrime);

// const num = 40;

// for (let i = 2; i < num; i++) {
//   if (Number(num) === num && num % i !== 0) {
//     console.log(`${num} is not a prime number`);
//   } else {
//     console.log(`${num} is a prime number`);
//   }
// }

function isPrime(n) {
  if (n < 2) return `${n} is not a prime number`;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return `${n} is not a prime number`;
    }
    console.log(i);
  }
  return `${n} is a prime number`;
}

console.log(isPrime(13));
