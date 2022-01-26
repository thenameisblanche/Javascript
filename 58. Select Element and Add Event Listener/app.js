// SELECT ELEMENT AND ADDEVENTSLISTENER()
// What event and what to do

// <-------------------Simple Function---------------------->

// const btn = document.querySelector('.btn');

// event, and do? mostly callback function
// callback function is good when you dont want to run right away
// anonymous function or reference

// btn.addEventListener('click', function () {

//   console.log('Hello, you clicked me lol');
// add .blue to h2

// you can select it here, or select it outsides
//   const heading = document.querySelector('h2');
//   heading.classList.add('blue');

// });

// <---------------------With Logic-------------->

const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

function changeColors() {
  //   console.log('hello');
  //   Check if the element has that class or not

  let hasClass = heading.classList.contains('red');

  if (hasClass) {
    heading.classList.remove('red');
  } else {
    heading.classList.add('red');
  }
}

// You wouldn't want to invoke it right away
btn.addEventListener('click', changeColors);
