// EVENT OBJECT
// Whenever we work with events in javascript in our calback function as an argument, we can get event object

// event object argument e,evt
// info about triggered event
// event.type
// event.currentTarget
// this keyword
// preventDefault() - prevents default behavior

const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');
const link = document.getElementById('link');

// Use event object to always select the element that has the event listener attached
heading.addEventListener('click', function (event) {
  //   heading.classList.add('blue');

  //   Will show Funcitons and Properties
  console.log(event);
  //   currentTarget, see what element you clicked
  console.log(event.currentTarget);
  console.log(this);
});

btn.addEventListener('click', function (event) {
  event.currentTarget.classList.add('blue');
  console.log(event.type);
  //   Useful with forms and page refresh
  //   preventDefault() prevents default behavior
});

function someLink(e) {
  e.preventDefault();
}

link.addEventListener('click', someLink);

// THIS KEYWORD
// Selecting a particular element
// confusing
