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
const myElement = document.querySelector('p'); // find the element by ID
changeBackgroundColor(myElement, 'green'); // change the background color to blue
myElement.style.color="white"; 

/*
Write a function that saves an object to localStorage. The function should
take two arguments: the first argument is a string representing the key to
use for storing the object, and the second argument is the object to store.
 */

function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
let myObject = { name: "Sadaf", age: 25 };
saveToLocalStorage("myKey", myObject);

let retrieved_Object = JSON.parse(localStorage.getItem("myKey"));
console.log(retrieved_Object);
// Output: { name: "sadaf", age: 25 }

/*
Write a function that retrieves an object from localStorage. The function
should take one argument, which is a string representing the key used to
store the object. The function should return the object
*/
function getFromLocalStorage(key) {
  let value = localStorage.getItem(key);
  return JSON.parse(value);
}
let retrievedObject = getFromLocalStorage("myKey");
console.log(retrievedObject);
// Output: { name: "sadaf", age: 25 }


/*Write a function that takes an object and saves each property to
localStorage using the property name as the key and the property value as
the value. The function should also retrieve the object from localStorage
and return it as a new object. */

function saveObjToLocalStorage(obj) {
  // Save each property of the object to localStorage
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      localStorage.setItem(prop, JSON.stringify(obj[prop]));
    }
  }

  // Retrieve the object from localStorage and return it as a new object
  let newObj = {};
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    newObj[key] = JSON.parse(localStorage.getItem(key));
  }
  return newObj;
}

let myObj = { name: "Maher", age: 30 };
let savedObject = saveObjToLocalStorage(myObj);
console.log(savedObject);
// Output: { name: "Maher", age: 30 }
