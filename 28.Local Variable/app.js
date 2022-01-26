// LOCAL SCOPE
// If you set up a  variable within a function, it is only gonna be available within that function, cannot accesed from outside the function

let name = 'Blanche';

function calculate() {
  // You don't need to name name1 name2, you can use name without affecting global
  // it cannot be modified from the outside
  const name = 'Blancheroo';
  const age = 25;
  // You need a keyword, if not, you can access it globally. Invoke first.
  // Use keywords if you wanna protect your variables
  thiswillbecomeGlobal = `Miley what's up?`;
}
calculate();
console.log(thiswillbecomeGlobal);

if (true) {
  const name = 'Jairus';
}

// Code blocks can be simple curly braces
{
  const bee = 'bee';
}
console.log(bee);

console.log(`My name is ${name} and I'm Cute!`);
