// GET ELEMENT BY ID
// Select the element or group of elements that we want
// Decide the effect that we wanna aplply to the selection

// getElementById('element');

// ASSIGNING TO VARIABLE
const title = document.getElementById('title');
title.style.color = 'Blue';

// DIRECTLY, it gets reduntant
document.getElementById('btn').style.backgroundColor = 'Green';
document.getElementById('btn').style.color = 'Yellow';

// REWRITE
const button = document.getElementById('btn');
button.style.color = 'Pink';
button.style.backgroundColor = 'Pink';
