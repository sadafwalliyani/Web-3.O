/*Q-1 Write a function in that creates a closure and returns a function that can add
a specific number to any number passed to it. For example, if the closure is
created with 5, the returned function should add 5 to any number passed
to it. */
function createAdder(num) {
  return function(x) {
    return x + num;
  }
}
const adder = createAdder(5);
let result = adder(10); // result = 15
console.log(result);

/* Q-2
Write a recursive function that searches an array for a specific value. The
function should return true if the value is found, and false if it is not. You
can assume that the array is not nested.
 */

function searchArray(arr, val){
 if(arr.length===0){
  return false;
 }
 else if( arr[0]=== val){
  return true;
 } else
 return searchArray(arr.slice(1), val);
}

const myArray=[1,2,3,4,5];
console.log(searchArray(myArray,(3))); //answer is true
console.log(searchArray(myArray,(6)));// answer is false

/*Write a function that adds a new paragraph element to the bottom of an
HTML document. The function should take a string argument that will be
used as the text content of the new paragraph element. */

function addParagraph(text) {
  const newParagraph = document.createElement('p');
  // create a new <p> element
  newParagraph.textContent = text; // set the text content of the new paragraph element
  document.body.appendChild(newParagraph); // add the new paragraph element to the end of the <body> element
}
addParagraph('This is my Assignment-2');

/*Write a function that adds a new list item to an unordered list in an HTML
document. The function should take a string argument that will be used as
the text content of the new list item. */

function addListItem(text) {
  const newListItem = document.createElement('li'); // create a new <li> element
  newListItem.textContent = text; // set the text content of the new list item
  const list = document.querySelector('ul'); // find the <ul> element
  list.appendChild(newListItem); // add the new list item to the end of the <ul> element
  }
 //addListItem('This is a new list item!');


 /*
 Write a function that changes the background color of an HTML element.
The function should take two arguments: the first argument is a reference
to the HTML element, and the second argument is a string representing
the new background color.*/

function changeBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}
const myElement = document.querySelector('#my-element'); // find the element by ID
changeBackgroundColor(myElement, 'blue'); // change the background color to blue






