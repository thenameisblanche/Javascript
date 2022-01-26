// CURRENT TARGET VS TARGET

// currentTarget - always refers to the element to which the event handler has been attached to

// target - identifies the element on which the event occured

// WHEN THERE IS A NESTED ELEMENT

const btn = document.querySelectorAll('.btn');

// GOAL: ADD COLOR TO CLICKED BUTTON

btn.forEach(function (item) {
  item.addEventListener('click', function (event) {
    console.log(event.currentTarget);
    event.currentTarget.style.color = 'blue';
  });
});
