// var studentName = "Mahesh";
// let studentAge = 22;
// const collegeName = "ABC College";

// console.log(studentName);
// console.log(studentAge);
// console.log(collegeName);

// studentName = "Rahul";
// studentAge = 23;

// console.log(studentName);
// console.log(studentAge);
 
// let name = prompt("Enter your name:");
// let age = prompt("Enter your age:");
// let city = prompt("Enter your city:");  

// console.log("Name:", name);
// console.log("Age:", age);
// console.log("City:", city);

// let userName = prompt("Enter your name:");
// alert ("Welcome" + userName + "!")

// console.log("Username:",userName);

// let birthYear = prompt("Enter your birthyear:");
// let currentYear = 2026;
// let calculatedAge = currentYear - Number(birthYear); 


// console.log("Birth Year:", birthYear);
// console.log("Age:", calculatedAge);

// // Task 5 - Identify Data Types

// let value1 = "hello";
// let value2 = 100;
// let value3 = 25.5;
// let value4 = true;
// let value5 = false;
// let value6;
// let value7 = null;

// console.log(value1, typeof value1);
// console.log(value2, typeof value2);
// console.log(value3, typeof value3);
// console.log(value4, typeof value4);
// console.log(value5, typeof value5);
// console.log(value6, typeof value6);
// console.log(value7, typeof value7);

// // Task 6 - Student Data

// let student = {
//     name: "Naveen",
//     age: 22,
//     city: "Trichy",
//     qualification: "B.E",
//     isStudent: true
// };

// // Print complete object
// console.log(student);

// // Print individual values
// console.log("Name:", student.name);
// console.log("Age:", student.age);
// console.log("Qualification:", student.qualification);
// console.log("isStudent:", student.isStudent);  

// // Task 7 - Fruit Array

// let Fruits =["Apple" ,"Mango" , "Orange"];
//  console.log("First Fruit:", Fruits[0]);
//   console.log("second Fruit:", Fruits[1]);
//    console.log("last Fruit:", Fruits[Fruits.length - 1]);  

//    //Task 8 - Basic Calculator

//    let a = 20;
//    let b = 5;

//    console.log("Addition:", a + b);
   
//    console.log("Subtraction:", a - b); 
   
//    console.log("Multiplication:", a * b);

//    console.log("Division:", a / b);
   
//    console.log("Modules:", a % b);

//    console.log("Exponentation:", a ** b);

//    // Task 9 - Shopping Bill

//    let shirt = 999;
//    let pant = 1499;
//    let shoes = 1999;

//    let total = shirt + pant + shoes ;

//    console.log("Total =", total);
   
//    // Task 10 - Simple MArks Calculation

// let tamil = 80;
// let english = 75;
// let maths = 90;

// let totalMarks = tamil + english + maths;
// let averageMarks = totalMarks / 3;

// console.log("Tamil:", tamil);
// console.log("English:", english);
// console.log("Maths:", maths);
// console.log("Total Marks:", totalMarks);
// console.log("Average Marks:", averageMarks);

// Task 11 - Post Increment

// let a = 10;
// let b = a++;

// console.log(a);
// console.log(b)

// Task 12 - Post Decrement

// let a = 20;

// let b = a--;

// console.log(a);
// console.log(b);  

// // Task 13 - Pre Decrement
// let a = 20;

// let b = --a;

// console.log(a);
// console.log(b);

// Task 14 - Find the Find values

// let a = 5;

// let b = a++;

// let c = ++a;

// let d = b--;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// //Task 15 - Assignment operations
// let num = 10;
// num += 5;
// console.log(num);

//Task 16 - Mini student profile
// Variables
let name = "Mahesh";
let age = 20;
let city = "Bangalore";

let subjects = [
  "JavaScript",
  "HTML",
  "CSS",
  "Python",
  "SQL"
];

let isStudent = true;

// Object
let student = {
  name,
  age,
  city,
  subjects,
  isStudent
};

// Print
console.log("Student Name:", student.name);
console.log("Student Age:", student.age);
console.log("City:", student.city);
console.log("First Subject:", student.subjects[0]);
console.log("Last Subject:", student.subjects[student.subjects.length - 1]);
console.log("Total Subjects:", student.subjects.length);
console.log("Complete Object:", student);