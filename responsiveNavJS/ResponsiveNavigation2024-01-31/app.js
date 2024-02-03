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
