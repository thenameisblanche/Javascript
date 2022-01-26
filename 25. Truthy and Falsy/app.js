// TRUTHY AND FALSY
// "", '', ``, 0 , -0, NaN, false, null, undefined,,

const bool1 = true;
const bool2 = 2 > 1;

// if (bool1) {
//   console.log('Hey It Works');
// }
// if (2 > 1) {
//   console.log('This also works, what the frog?');
// }

const text = 'Blanche';

// Just a text, but why true?
// If empty false, If has string true, it would just evaluate
if (text) {
  console.log('Value is Truthy');
} else {
  console.log('The value is Falsy');
}
