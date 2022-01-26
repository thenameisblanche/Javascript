// Variable Lookup
// {} - code block

const globalNumber = 5;

function add(num1, num2) {
  // will check if there is globalNumber variable in the scope, if not, will look outside
  const globalNumber = 20;
  const result = num1 + num2 + globalNumber;

  // if we have a function within a function, same wil happen
  function multiply() {
    // if no global number here, will check outside
    // but the outsides cannot check for the inside
    const globalNumber = 100;
    const multiplyResult = result * globalNumber;
    console.log(multiplyResult);
  }
  multiply();
  return result;
}

console.log(add(3, 4));
