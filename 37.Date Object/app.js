// DATE
// Months and Days will return as numbers, can be used as indexes
const months = [
  'Gennaio', //0
  'Febrraio', //1
  'Marzo', //2
  'Aprile', //3
  'Maggio', //4
  'Giugnio', //5
  'Luglio', //6
  'Agosto', //7
  'Settembre', //8
  'Ottobre', //9
  'Novembre', //10
  'Dicembre', //11
];

const days = [
  'Domenica',
  'Lunedi',
  'Martedi',
  'Mercoledi',
  'Venerdi',
  'Sabato',
];

// Using Date()
// const date = new Date();
// or
const date = new Date('01 / 12 / 2001');
console.log(date);

// Using getMonth
// This will pass month january as 0
const month = date.getMonth();
// We wikk use that 0 to index it in the array we made for months. months(this is the array we made)[this is the month in number form that we took from const month]
console.log(months[month]);

const day = date.getDay();
console.log(days[day]);

console.log(date.getDate());
console.log(date.getFullYear());

const sentence = `${days[day]}, ${date.getDate()}, ${
  months[month]
} ${date.getFullYear()}`;

console.log(sentence);

document.body.innerHTML = sentence;
