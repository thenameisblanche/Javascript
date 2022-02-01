// EVENT BUBBLE CAPTURING
// Allows selecting dynamic elements - the elements that we added by the javascript
// event propogation - order the events are fired
// event bubbling - clicked element first then bubbles up - default - parent all the way up to the window
// event capturing - fires at the root and fires until reaches target capture: true from window to target{capture:true}

// TARGET THE list-items and container

const container = document.querySelector('.container');
const list = document.querySelector('.list-items');

function showBubbling(event) {
  console.log('current target', event.currentTarget);
  // console.log('target', event.target);

  // if (event.target.classList.contains('link')) {
  //   console.log('u clicked link');
  // }
}

// TO AVOID PROPAGATION
function stopPropagation(event) {
  event.stopPropagation();
  console.log('u clicked on a list');
  // only this one
}

//both will fire
// Register the event all the way to document
list.addEventListener('click', stopPropagation, { capture: true });
container.addEventListener('click', showBubbling, { capture: true });
document.addEventListener('click', showBubbling, { capture: true });
window.addEventListener('click', showBubbling, { capture: true });

// WE CAN SELECT ELEMENTS WITHOUT TARGETIING THEM

//
