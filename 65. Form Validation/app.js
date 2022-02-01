// FORM SUBMISSION
// submit event listener
// how to get a value

const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');

form.addEventListener('submit', function (event) {
  // will show for a split second, then wipeout. default, action attribute will send the data to server from form
  // Not only it will send the data, but refresh the page
  // Add event prevent default
  event.preventDefault();
  console.log('Form Submited');
  console.log(name.value);
  console.log(password.value);
});

// GRAB THE VALUE
