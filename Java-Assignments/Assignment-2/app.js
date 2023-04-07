// Q-1Write a JavaScript program that accepts two numbers in two prompts and displays the larger one in the console.

/*let number1 = prompt("Enter the first number:");
let number2 = prompt("Enter the second number:");

number1 = parseFloat(number1);
number2 = parseFloat(number2);

if (number1 > number2) {
    console.log(number1 + " is larger than " + number2);
  } else if (number2 > number1) {
    console.log(number2 + " is larger than " + number1);
  } else {
    console.log("Both numbers are equal");
  }
  */


  //Q2 Write a JavaScript conditional statement to find the sign of a number. Display an alert box with the specified sign.

 /*
let number = prompt("Enter a number:");
number = parseFloat(number);

if (number > 0) {
    alert("The number is positive");
  } else if (number < 0) {
    alert("The number is negative");
  } else {
    alert("The number is zero");
  }
   */

  /*
  Q-3 Write a JavaScript conditional statement to find the sign of a number. 
  Display an alert box with the specified sign.
Sample: 3
Output : The sign is +
Sample: -5
Output : The sign is -
*/
/*
// Prompt the user to enter a number
let number = prompt("Enter a number:");

// Convert the input from string to number
number = parseFloat(number);

// Determine the sign of the number using a conditional statement
if (number > 0) {
  alert("The sign is +");
} else if (number < 0) {
  alert("The sign is -");
} else {
  alert("The number is zero");
}
*/

/* Q-4 Write a JavaScript program that accepts five numbers in five prompts and
displays the larger one in the console.*/
// Accept five numbers using prompts

/*
let number1 = prompt("Enter the first number:");
let number2 = prompt("Enter the second number:");
let number3 = prompt("Enter the third number:");
let number4 = prompt("Enter the fourth number:");
let number5 = prompt("Enter the fifth number:");

// Convert the inputs from strings to numbers
number1 = parseFloat(number1);
number2 = parseFloat(number2);
number3 = parseFloat(number3);
number4 = parseFloat(number4);
number5 = parseFloat(number5);

// guess the largest number using a series of conditional statements
let largestNumber = number1;
if (number2 > largestNumber) {
  largestNumber = number2;
}
if (number3 > largestNumber) {
  largestNumber = number3;
}
if (number4 > largestNumber) {
  largestNumber = number4;
}
if (number5 > largestNumber) {
  largestNumber = number5;
}

// Display the largest number in the console
console.log("The largest number is: " + largestNumber);
*/

/*Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
will check if the current number is odd or even, and display a message to the
screen.
Sample Output :
"0 is even"
"1 is odd"
"2 is even" */

// Loop from 0 to 15
for (let i = 0; i <= 15; i++) {
    // Check if the current number is even or odd using the remainder operator
    if (i % 2 === 0) {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }
  
/*Write a JavaScript program which computes the average marks of the
following students Then, this average is used to determine the corresponding
grade.
The grades are computed as follows :
Range Grade
<60 F
<70 D
<80 C
<90 B
<100 A */

// Array of student marks
// const marks = [85, 78, 92, 60, 72, 50,40,100,90];

// // Calculate the average mark
// let total = 0;
// for (let i = 0; i < marks.length; i++) {
//   total += marks[i];
// }
// const average = total / marks.length;



let students = [['Sadaf', 80], ['Maher', 77], ['Madiha', 88], ['Ishitha', 95], ['Shahid', 68]];

let Avgmarks = 0;

for (let i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); }


/* */

/* Q7-Write a JavaScript program to construct the following pattern, using a nested
for loop.*/

// Define the number of rows for the pattern
const numRows = 5;

// Loop through each row
for (let i = 0; i < numRows; i++) {
  let row = ""; // Initialize an empty string for the current row

  // Loop through each column in the current row
  for (let j = 0; j <= i; j++) {
    row += "* "; // Add a star to the current row
  }

  console.log(row); // Print the current row to the console
}
