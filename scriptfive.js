// Q1: What is the difference between var, let, and const?.

//var - function scoped can be redecleared and reassigned
//let - block scoped can be reassigned but not redeclared   
//const - block scoped cannot be redeclared or reassigned

//Q2: Can you re-declare a variable with var? What about let and const?

// var x = 10;
// var x = 20; // This is allowed with var

// let y = 30;
// // let y = 40; // This will throw an error because let cannot be redeclared  

// const z = 50;
// const z = 60; // This will throw an error because const cannot be redeclared


 //Q3: What is the output of this code?

//  var x = 5;
//  let y = 10;
//  const z = 15;

//  x = 20;
//  y = 30;
//  z = 40; // This will throw an error because const cannot be reassigned

//  console.log(x,y,z);
 
 //Q4: What is the difference between declaring and initializing a variable?

//Delclaration : creating a variable without giving it a value.
//Initialization : giving a value to a variable that has been declared.


//Q5: What will be the output?
//```javascript
// let a;
// console.log(a);

// undefined

// Q6: What is hoisting? Give an example.

// hoisting means javascript moves vvariable and fuction declearation on the top of the code before execution.

// console.log(x);
// var x = 5; // Output: undefined because the declaration is hoisted but not the initialization       

// Q7: What is the difference between null and undefined?

// null is a value that can be assigned to a variable, indicating that the variable has no value.
// undefined is a value that is automatically assigned to a variable that has been declared but not initialized.        


//  Q8: What will be the output?
//```javascript
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof []);
// console.log(typeof {});             

// output:
// object  
// undefined
// object
// object  

//  Q9: What is the difference between == and ===?

// == - compares values after type conversion
// === - returns the value first and then increases

// //Q10: What is the difference between ++i and i++?

// ++i - increase first, then return the value
// i++ - return the value first, then increase

// Q11: What will be the output?
//```javascript
// let x = 10;
// let y = "5";
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);

// Output:
// 105 
// 5       
// 50
// 2


// Q12: What are logical operators? Explain with examples.

// Logical operators are used to determine the logic between variables or values.
// && (AND) - returns true if both operands are true
// || (OR) - returns true if at least one operand is true
// ! (NOT) - returns true if the operand is false


// Q13: What will be the output?
//```javascript
// console.log(5 > 3 && 10 > 5);
// console.log(5 > 10 || 10 > 5);
// console.log(!(5 > 3));

// Output:
// True
// True
// false

//Q14: What is the ternary operator? Give an example.

// The ternary operator is a short way to write one line if-else statements. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.    

//Example:

// let age = 20;
// let isAdult = age >= 18 ? "Yes" : "No";
// console.log(isAdult);


//Q15: What is the difference between implicit and explicit type casting?

//implicit : type casting is when JavaScript automatically converts one data type to another, while explicit type casting is when the programmer manually converts a value from one data type to another using functions or methods.

//explicit : type casting is when the programmer manually converts a value from one data type to another using functions or methods.

 //Q16: What will be the output?
//```javascript
// console.log(Number("123"));
// console.log(Number("hello"));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Boolean(0));
// console.log(Boolean("hello"));

// Output:
// 123 
// NaN
// 1
// 0
// false
// true    



// Q17: What is NaN? Give an example.

// NaN stands for "Not-a-Number" and is a special value in JavaScript that represents an undefined or unrepresentable value resulting from a mathematical operation.

// Example:
//  console.log(Number("hello")); 
 // Output: NaN

 
// Q19: What will be the output?

//```javascript
// let age = 20;
// if(age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }

// Output: Adult

// Q20: What is nested if? Give an example.
// Nested if statements are if statements that are placed inside other if statements.

// let age = 20;
// let hasID = true;

// if(age >= 18) {
//     if (hasID) {
//         console.log("Allowed");
//     }
// }

// Q21: Write a program to check if a number is even or odd using ternary operator.

// let number = 7;
// let result = (number % 2 === 0) ? "Even" : "Odd";
// console.log(result);


//  Q22: What is the difference between while and do-while?

// The main difference between while and do-while loops is that the while loop checks the condition before executing the code block, whereas the do-while loop executes the code block at least once before checking the condition.


// Q23: What will be the output?
//```javascript
// for(let i = 1; i = 5; i++) {
//     console.log(i);
// }

// Output: Infinite loop because the condition i = 5 is an assignment, not a comparison. It will always evaluate to true, causing the loop to run indefinitely.
// 1,2,3,4,5



// Q24: What is the difference between for-of and for-in?

// The for...in loop iterates over the enumerable properties of an object, while the for...of loop iterates over the values of an iterable object.

// let arr = ["apple", "banana", "cherry"];
// for (let value of arr) {
//     console.log(value); 
    
//     //Output: apple, banana, cherry
// }


// Q25: Write a program to find sum of numbers from 1 to 100

// let sum = 0;
// for (let i = 1; i = 100; i++){
//     sum = sum + i;
// }
// console.log(sum);

// Output: 5050


// Q26: What is the difference between slice and splice?

// slice() - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(1, 4)); 
// // Output: [2, 3, 4]

// // splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. The original array will be modified.

// let arr2 = [1, 2, 3, 4, 5];
// arr2.splice(1, 2, 6, 7); 
// console.log(arr2); 
// Output: [1, 6, 7, 4, 5]

//Q27: What will be the output?
//```javascript

// let arr = [1, 2, 3];
// arr.push(4);
// arr.pop();
// arr.unshift(0);
// arr.shift();
// console.log(arr);

// Output: [1, 2, 3]

//Q28: What is the difference between function declaration and function expression?

// Function declaration - A function declaration defines a named function. It is hoisted, meaning it can be called before it is defined in the code.

// function greet() {
//     console.log("Hello!");
// }

// Function expression - A function expression defines an anonymous function and assigns it to a variable. It is not hoisted, so it cannot be called before it is defined.

// let greet = function() {
//     console.log("Hello!");
// };   


// Q29: What is an arrow function? Give an example.

// An arrow function is a concise way to write functions in JavaScript. It uses the "=>" syntax and does not have its own "this" context. Arrow functions are often used for short, single-line functions.

// Example:

// let add = (a, b) => a + b;
// console.log(add(2, 3));
//  // Output: 5

// Q30: What will be the output?
//```javascript

function greet() {
    return "Hello";
}
let message = greet();
console.log(message);

Output: Hello