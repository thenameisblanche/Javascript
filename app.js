// JSON.stringify(), JSON.parse()

const friends = ['john', 'peter', 'bob'];

// not storing as an array
// localStorage.setItem('friends', friends);

// Access it
// const values = localStorage.getItem('friends');
// console.log(values);
// will output j, because it is not array anymore
// console.log(values[0]);
// // everything is back to string, even when stored array

// JSON.stringify will convert value to JSON string

// JSON.parse will get back the initial value

localStorage.setItem('friends', JSON.stringify(friends));

//WITHOUT PARSE
// const values = localStorage.getItem('friends');
// console.log(values);
// // will return '['
// console.log(values[0]);

// WITH PARSE
const values = JSON.parse(localStorage.getItem('friends'));
console.log(values);
// will return 'john'
console.log(values[0]);

// CHECK VALUE
// If Stored Locally, Assign
// If not, empty array

let fruits;

if (localStorage.getItem('fruits')) {
  fruits = JSON.parse(localStorage.getItem('fruits'));
} else {
  fruits = [];
}

// Add a string to fruits
console.log(fruits);
// fruits.push('apple');
// will push
fruits.push('orange');

localStorage.setItem('fruits', JSON.stringify(fruits));
