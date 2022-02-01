// LOCAL STORAGE
// Web storage API
// Way for us to  data between the sessions, opening and closing of the browser
// Local Storage and Session Storage are provided by the browsr
// Method Names: setItem, getItem, removeItem, clear

// Both session and local uses key value pairs to store data, can be found in dev tools

// api(localStorage).methodname(setItem)('key','value')
// localStorage.setItem('name', 'john');
// sessionStorage.setItem('name', 'john');

// same keyname = override
localStorage.setItem('name', 'Blanche');
localStorage.setItem('friend', 'Brio');
localStorage.setItem('job', 'Full Stack Developer');
localStorage.setItem('address', 'Street 123');

// HOW TO ACCESS
// Assign to a variable
const name = localStorage.getItem('name');
console.log(name);

// REMOVE ITEMS OR CLEAR ALL

localStorage.removeItem('name');
const anotherName = localStorage.getItem('name');
console.log(anotherName);

localStorage.clear();
