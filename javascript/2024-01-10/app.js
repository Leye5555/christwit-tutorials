// // TODO: Read up javascript types and keywords

// let // this is a variable declaration
//   boy = "james"; // variable name // variable assignment // value given to the variable
// // var, let and const

// boy = "Author"; // var and let declarations can be reassigned

// // multiple declaration statements

// // let student = "Emmanuel",
// //   age = 50,
// //   height = 1.7,
// //   gender = "male";

// // single declaration
// let student = "Charley"; // string
// let age = 20; // number
// let height = 1.6;
// let gender = "man";

// // method 1 - works only for console.log
// // console.log(
// //   "There is a student named '%s'. He is '%s' years old. He is '%s' meters tall and he is a '%s'. ", // string
// //   student,
// //   age,
// //   height,
// //   gender
// // );

// // method 2 - the standard is called CONCATENATION
// // console.log(
// //   "There is a student named " +
// //     student +
// //     ". He is " +
// //     age +
// //     " years old. " +
// //     "He is " +
// //     height +
// //     " meters tall and he is a " +
// //     gender +
// //     "."
// // );

// // 17-01-2024
// // data types
// // 1. strings
// // these are types that are for the most part immutable or not changing.
// // e.g
// let str = "this is a string"; // sentences, phrases, words, clauses in english etc.

// // numbers
// // e.g 1,2,3,43;
// // concatenation
// const addNumbers = 2 + 1 + 5;
// console.log(addNumbers);

// // booleans
// // e.g true , false
// true;
// false;

// // symbols
// // e.g +,-,%,/,\,&,^

// // null   // doesn't exist

// // undefined  // may exist but doesn't have a defined value

// // objects
// // e.g
// const girl = {
//   name: "rose",
//   age: 5,
//   favorite_color: "red",
// };
// girl.name = "mary";

// console.log(girl);

// // objects - array
// // arrays are zero index based
// // modular arithmetics
// const daysOfWeek = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// switch (daysOfWeek[1]) {
//   case "Monday":
//     console.log("Hi it's " + daysOfWeek[1]);
//     break;
//   default:
//     console.log("no more day of the week");
//     break;
// }

// // BigInt
// const veryLargeNo = BigInt(
//   "12992392838928349234873974928934892839283988239832"
// );
// console.log(veryLargeNo);

// // operators

// let num1 = 444;
// let num2 = 11;
// console.log("numbers : ", num1, num2);
// console.log("addition", num1 + num2);
// console.log("subtraction", num1 - num2);
// console.log("division", num1 / num2); // focuses on quotient or answer
// console.log("multiplication", num1 * num2);
// console.log("modulo", num1 % num2); // focuses on remainder
// console.log("assigns", (num1 = num2)); // assignment
// console.log("equals", num1 == num2);
// console.log("equals in both value and type", num1 === num2);
// console.log("not equals in value", num1 != num2);
// console.log("not equals in both value and type", num1 !== num2);

// // this 11 === 11
// console.log("checking value and type equality", num1 == num2);

// // Flows

// if (num1 === num2) {
//   // flow block
//   console.log("they are equal");
// } else {
//   console.log("they are not equal");
// }

// 2024-01-24

// function declaration
// function main() {
//   const app = document.getElementById("app");
//   const name = document.getElementById("name");
//   const email = document.getElementById("email");
//   const phone = document.getElementById("phone");
//   const age = document.getElementById("age");

//   // camelCase
//   const nameAnswer = document.getElementById("name-answer");
//   const emailAnswer = document.getElementById("email-answer");
//   const phoneAnswer = document.getElementById("phone-answer");
//   const ageAnswer = document.getElementById("age-answer");
//   // input objects all have a value property
//   // console.log(name.value, email.value, phone.value, age.value);

//   // assign answers to DOM
//   nameAnswer.textContent = "Hello, " + name.value;
//   emailAnswer.textContent = "Your email is " + email.value;
//   phoneAnswer.textContent = "Your phone is " + phone.value;
//   ageAnswer.textContent = "You are " + age.value + " years old.";
// }

// const button = document.getElementById("btn");

// button.addEventListener("click", main);

// flows

// if flows

// let today; // declaration;
// today = "Saturday"; // initialization
// let today2 = "Sunday";
// let guessDay = prompt("What is today?");
// // magic numbers or string are values used in programs which are not assigned to a variable
// // if condition

// // 11 !== "11"
// if (today.toLowerCase() === guessDay.toLowerCase()) {
//   alert("Today is " + guessDay);
// } else if (today2.toLowerCase() === guessDay.toLowerCase()) {
//   alert("Almost there, today is the day before your guess");
// } else {
//   alert("today is not " + guessDay);
// }

// do while loop
// while loop
// for loop

// let password; // top level declaration
// const savedPassword = "faith";
// function checkPassword(pass_param) {
//   let isUser = false;
//   if (savedPassword === pass_param) {
//     alert("Welcome to your account");
//     isUser = true;
//     return isUser;
//   } else if (savedPassword !== pass_param) {
//     alert("Incorrect Password");
//     return isUser;
//   }
//   return isUser;
// }

// // loop
// do {
//   password = prompt("please enter your password");
// } while (checkPassword(password) !== true); // always run when true
