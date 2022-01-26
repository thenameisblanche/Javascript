// CSS PROPERTY
// has a downside

const random = document.querySelector('.random');
console.log(random.style);
// downside is you're adding property 1 by 1

// Took 4 lines
// random.style.backgroundColor = 'blue';
// random.style.color = 'wheat';
// random.style.fontSize = '3rem';
// random.style.textTransform = 'capitalize';

// Just pass it in a class
random.classList.add('title');
