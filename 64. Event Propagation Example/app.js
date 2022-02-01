// EVENT PROPAGATION
// Allows selectong dynamic elements
// element bubbling - clicked element first then bubbles up

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
// const heading = document.querySelector('.heading');
// console.log(heading);

function sayHello() {
  console.log('Buongiorno!');
}

// ADD HEADING DYNAMICALLY
btn.addEventListener('click', function () {
  const element = document.createElement('h1');
  element.classList.add('heading');
  element.textContent = `I'm inside COntainer`;
  container.appendChild(element);
});

container.addEventListener('click', function (e) {
  // The heading made dynamically is targeted
  e.target.classList.contains('heading');
  console.log('hello');
});

// wont be accessed since headings are made dynamically
// heading.addEventListener('click', sayHello);

// Target parent element
