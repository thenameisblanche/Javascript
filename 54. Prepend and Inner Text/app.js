// PREPEND METHOD AND INNER TEXT PROPERTY

// Insert h2 in front of the first heading

const heading = document.createElement('h2');
// Instead of creating a text node and appending it to the heading, use inner text
heading.innerText = 'I am inevitable..Dynamic Heading';
//Prepend, will add to the end of body element, in front. <body> Here :>
document.body.prepend(heading);
