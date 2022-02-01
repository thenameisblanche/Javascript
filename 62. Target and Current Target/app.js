// CURRENT TARGET VS TARGET

// currentTarget - always refers to the element to which the event handler has been attached to

// target - identifies the element on which the event occured

// WHEN THERE IS A NESTED ELEMENT

const btn = document.querySelectorAll('.btn');

// GOAL: ADD COLOR TO CLICKED BUTTON

btn.forEach(function (item) {
  item.addEventListener('click', function (event) {
    // LOG THE EVENT TO SEE THE TARGET PROPERTY
    console.log(event);
    // CURRENT TARGET
    // console.log(event.currentTarget);
    // event.currentTarget.style.color = 'blue';
    // TARGET
    // Where event occured, the element identifie
    console.log('target', event.target);
    console.log('targetCurrent', event.currentTarget);
    event.target.style.color = 'green';
  });
});
