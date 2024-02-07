const menuBtn = document.getElementById("menuBtn");
const menuWindow = document.getElementById("menu-window");
menuBtn.addEventListener("click", toggleNavigation);

function toggleNavigation(event) {
  let btnState = menuBtn.getAttribute("data-state");
  if (btnState === "open") {
    menuBtn.setAttribute("data-state", "closed");
    menuWindow.classList.remove("nav-mobile--active");
  } else if (btnState === "closed") {
    menuWindow.classList.add("nav-mobile--active");
    menuBtn.setAttribute("data-state", "open");
  }
}

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");

prev.addEventListener("click", submitForm);
next.addEventListener("click", submitForm);
function submitForm(e) {
  e.preventDefault();
  const user = {
    first_name: firstName.value,
    last_name: lastName.value,
  };
  // storage
  window.localStorage.setItem("user-data", JSON.stringify(user));
}
