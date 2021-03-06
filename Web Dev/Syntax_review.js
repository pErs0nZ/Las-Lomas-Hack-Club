/*Note: This is a review, it assumes you already know js and need a refresher.
This is NOT to learn js the first time, and assumes you can program in js.*/ 

//1. Basics 

//use strict makes it so that the computer uses modern js and is no longer compatable with old js
//anything below use strict is modern js, use strict cannot be cancelled
"use strict"
//This is a comment in js
//basic hello world
console.log("js is good");
//if you want your message to appear on an HTML webpage, use 
alert("js is good")  //this will give an error if not enclosed in <script> tags on an html webpage
// let is local if in function but global if outside
let test1; //can also declare like let test1 = 5;
test1 = 5;
//var is always global
var test2; //can also declare lkie let test2 = 6;
test2 = 6;
//constants cannot be changed or you get error
const test3 = 7; // cannot do const test3 
                //test3 = 7
//js data types don't have to be specified explicitly
var mystring = "hello"; //string
var myint = 5; //integer note:js does not have seperate var for float values like python
var mybool = true; //boolean (true or false)
var mynull = null; //null or nonetype
var myundef; //if you don't declare val of variable it is just undefined

//if you are unsure of type use
console.log(typeof variable_name); //returns type of obj

//If you are on an html website, you can ask the user to input things with
var myvar = prompt("my prompt");//will give you error if on console, must be inside an html page
//User input will be stored in a variable named myvar

//some other math functions
alert(myvar); // will print out on HTML page what the user input
//exponentiation 
console.log(a**b**c); // 1125899906842624 because it does 4 to the power of 5 to the power of 2

//incrementation/decrementation
console.log(a++); //can only do with vars
console.log(b--);

console.log(++a);//if you want to see result of ++, put it before var.  If you want to see original val, put it behind
console.log(--b);

//2. Logic and control flow
var age = 55; 
if(age > 14){  //this is a basic if statement, if the condition is true, which it is because 55>14, the code within the {} brackets will be executed
  console.log("You're so old!");
}else if (age < 14){  //will only execute if this statement is true, allows to stack mulitple logical operators
  console.log("small child, you have much to learn")  //code will not execute unless age is less than 14
}else{ //the code within this statement will only execute if age>14 is false, it will not execute in this case
  console.log("wow, your as old as me!"); 
}

//teneary operators or question mark operators are represented by ?

//this code is too long and can be shortened by "?" operators
var isFriend;
var vitalQues = prompt('coffee or tea??', '');

if (vitalQues == "tea") {
  isFriend = true;
} else {
  isFriend = false;
}

console.log("Friend Status: "+isFriend);

//shortened code with tenerary op

var isFriend;
var vitalQues = prompt('coffee or tea??', '');

var isFriend = (vitalQues = "tea") ? true : false;

console.log("Friend Status: "+isFriend);
