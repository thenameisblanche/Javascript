// KEY EVENTS
// keypress - when key is pressed
// keydown - when key is down
// keyup - when key is released

// Most likely in inputs

const nameInput = document.getElementById('name');

// Fires as you type
// nameInput.addEventListener('keypress', function () {
//   console.log('you pressed a key');
// });

// Fires as you hold key
// nameInput.addEventListener('keydown', function () {
//   console.log('you pressed a key');
// });

//
nameInput.addEventListener('keyup', function () {
  //   console.dir(nameInput);
  console.log(nameInput.value);
});
