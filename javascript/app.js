const app = document.getElementById("app");
const inputName = document.getElementById("name");
const inputAge = document.getElementById("age");
const inputGender = document.getElementById("gender");
const questions = [
  // array
  "What is your name?",
  "How old are you?",
  "Are you a male or female?",
]; // arrays in JS are zero index based.// they count from zero
const responses = ["my name is app500", "I am an hour old", "I am a computer"];

const user = {
  // object
  name: "",
  age: 0,
  gender: "",
};

const five = 2;

function main() {
  //  user
  //
  //
  //
  //
  //
  // const name = prompt(questions[0]);
  // user.name = name;
  // const age = prompt(questions[1]);
  // user.age = age;
  // const gender = prompt(questions[2]);
  // user.gender = gender;
  // app.innerHTML = `
  //       <h3>User Profile</h3>
  //        <ul>
  //           <li>Name : ${user.name}</li>
  //           <li>Age : ${user.age}</li>
  //           <li>Gender : ${user.gender}</li>
  //        </ul>
  //     `;
  //
  //
  //
  //
  //
  // computer
  //
  //
  //
  // inputName.removeAttribute("hidden");
  // setTimeout(() => {
  //   inputName.value = responses[0];
  //   inputAge.removeAttribute("hidden");
  //   setTimeout(() => {
  //     inputAge.value = responses[1];
  //     inputGender.removeAttribute("hidden");
  //     setTimeout(() => {
  //       inputGender.value = responses[2];
  //     }, 3000);
  //   }, 3000);
  // }, 3000);
}

// main();
