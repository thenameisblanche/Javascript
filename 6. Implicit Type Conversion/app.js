// Implicit Type Conversion

const stwing = 'string';
const nomstwing = '18';
const nom = 18;

// string - num
let stwingnom = stwing - nom;
console.log(stwingnom);

// + is concatenate
stwingnom = stwing + nom;
console.log(stwingnom);

// numbers can operate
stwingnom = nom * nomstwing;
console.log(stwingnom);

// Using parseInt for fixing numbers converting to string

const randomNumber = 15;

document.querySelector('.form').addEventListener('submit', function (e) {
  e.preventDefault();
  let value = document.getElementById('amount').value;
  value = parseInt(value);
  console.log('Input Value Type');
  console.log(value);
  console.log('Sum of Two Values');
  console.log(randomNumber + value);
});
