// types in Js
/*  https://w3schools.com/js/js_datatypes.asp
JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

The Object Datatype
The object data type can contain:

1. An object
2. An array
3. A date
 * 
 * 
*/

// let my_string232323h232hh = "blue sky"; // string
// let my_number = 1;

// alert(typeof my_number);

// keywords

// https://www.w3schools.com/js/js_reserved.asp

let img_url_on = "https://www.w3schools.com/js/pic_bulbon.gif";
let img_url_off = "https://www.w3schools.com/js/pic_bulboff.gif";

const btn = document.getElementById("button");
const img = document.getElementById("img");
function lightToggle(e) {
  const state = img.getAttribute("data-state");
  // conditions
  if (state.toString() === "0") {
    img.setAttribute("src", img_url_on);
    img.setAttribute("data-state", 1);
    e.target.textContent = "Turn off";
  } else if (state.toString() === "1") {
    img.setAttribute("src", img_url_off);
    img.setAttribute("data-state", 0);
    e.target.textContent = "Turn on";
  }
}

btn.addEventListener("click", lightToggle);
