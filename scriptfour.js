// // Task 1 — For Loop

// for (let i = 1; i <= 10; i++){
//     console.log(i);
    
// }

// // Task 2 - Reverse Number

// for (let i = 10; i >= 1; i--){
//     console.log(i);
    
// }

// // Task 3 - Even Number

// for (let i = 1; i <= 20; i++){
//     if (i % 2 === 0) {
//         console.log(i);
        
        
//     }
    
// }

// // Task 4 - Odd Numbers

// for (let i = 1; i <= 20; i++){
//     if (i % 2) {
//         console.log(i

//         );
        
        
//     }
// }

// // Task 5 - Multiplication Table

// let num = Number(prompt("Enter a number:"));
// for (let i = 1; i <= 10; i++){
//     console.log(num + " X " + i + " = " + (num * i));
    
// }
    
// // Task 6 - Countdown using while loop

// let i = 10;
// while (i >= 1){
//     console.log(i);
//     i--;
//     clear
// // Task 7 — Sum of Numbers

// let i = 1;
// let sum = 0;

// while (i <= 10) {
//     sum = sum + i;
//     i++;
// }

// console.log(sum);Task 

// // Task 8 - print numbers

// let i = 1;
//  do {
//  console.log(i);
//  i++;

//  }while(i <= 5);
 
//  // Task 9 - Do while understanding

//  let a = 10;

//  do{
//  console.log(a);
//  a++;
//  }while( a <= 5);

//Task 10 - String characters

// let name = "javascript";

// for (let character of name){
// console.log(character);

    
// }

// //Task 11 - Array values

// let fruits = ["apple","orange","grapes","banana","mango"];

// for(let fruit of fruits){
// console.log(fruit);
// }

// //Task 12 - Student names

// let students = ["mahesh","naveen","nagesh","bharath"];

// for(let student of students){
// console.log("student: " + students);
// }

// //Task 13 - Employee object

// let employee = {
//    name:"mahesh",
//    age: 24,
//    role:"developer",
//    city:"hosur",
//    };

//    for(let key in employee){
//    console.log(key + "" + employee[key]);
//    }

// // Task 14 - Product object

// let product = {
// productName: "laptop",
// price: 50000,
// brand: " Dell",
// category: " Electronics",
// stock: 10,
// };

// for(let key in product){
// console.log(key + " " + 
// product[key]);
// }

// // Task 15 - Simple function

// function welcome(){
// console.log("welcome to javascript");
// }
// welcome();
// welcome();
// welcome();

// // Task 16 - Function with parameter

// function greet(name) {
// console.log("Hello " + name);
// }
// greet("mahesh");
// greet("arun");
// greet("madesh");

// //Task 17 - Multiple parameters

// function student(name,age,deparment)
// {
// console.log("Name: " +name);
// console.log("Age: " +age);
// console.log("Deparment: " +deparment);
// console.log("---------");
// }
// student("Mahesh",24, "Ece ");
// student("Sri",23, "Ece");
// student("Madesh",23, " Ece");

// // Task 18 - Addition function

// function add(a,b){
// return a+b;
// }

// let result = add (10,20);
// console.log(result);

// // Task 19 - Salary 

// function salary(amount){
// return amount;
// }

// let salaryresult = salary(30000);
// console.log(salaryresult);


// // Task 20 - Bonus calculator

// function bonus(salary,bonusamount){
//     return salary + bonusamount;

// }
// let bonusresult = bonus(30000,5000);
// console.log(bonusresult);

// // Task 21 - Default parameter

// function employee(name,role = "developer") {
//     console.log(name,role);
    
// }
// employee("Mahesh");
// employee("Arun","Designer");


// //Task 22 - Named function

// function square(number){
//     return number * number;
// }
// console.log(square(5));
// console.log(square(6));
// console.log(square(7));
// console.log(square(8));

// // Task 23 - Anonymous function
// let calculate = function(a,b){
//     return a + b;
// };
// console.log(calculate(10,20));

// // Task 24 - Arrow function

// let multiply = (a,b) => {
//     return a * b;
// };
// console.log(multiply(10,20));

// // Task 25 Predict the output
// function test() {
//     if (true) {
//         var a = 10;
//         let b = 20;
//         const c = 30;

//         console.log(a);
//         console.log(b);
//         console.log(c);

//     }
    
//         console.log(a);
//         console.log(b);
//         console.log(c);
// }
// test();

// Task 26 - hoisting

// console.log(x)
// var x = 5;   

// // Task 27 - Let

// console.log(b);

// let b = 10;
// console.log(b);

// //Task 28 - const

// console.log(c);
// const c = 15;   

//Task 29 — Self Invoking Function
// (function() {
//     console.log("Welcome to Javascript");

// })();

// (function(product,discount) {
//     console.log("Product: " + product);
//     console.log("Discount: " + discount);
// })("Laptop", 0.2);

// Task 30 - Callback / Higher-Order Function

// function welcome (){
//     console.log("Welcome");
// }

// function execute(callback){
//     callback();
// }
// execute(welcome);
//

// Task 31 - Cashback

// function cashback(amount,callback){
//     let cashbackAmount = amount * 0.1;
//     callback(cashbackAmount);
// }               
// const displayCashback = (cashbackAmount) => {
//     console.log("Cashback Amount: " + cashbackAmount);
// }       
// cashback(1000, displayCashback);        

//Task 32 - Employee Management Console

// const annualsalary = salary => {
//     salary * 12;
// }
// console.log(
//     "Mahesh Annual Salary: " ,
//     annualsalary(employe[0].salary)
// );

// function* benefits() {
//     yield "Health Insurance";
//     yield "Transport Allowance";
//     yield "Food Allowance";
// }
// console.log("--------Employee
//     Benefits--------");

// for (let benefit of benefits()) {
//     console.log(benefit);
}


