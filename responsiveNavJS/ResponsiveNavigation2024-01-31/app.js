const signUpPage =
  "http://127.0.0.1:5500/responsiveNavJS/ResponsiveNavigation2024-01-31/index.html";
const dashboardPage =
  "http://127.0.0.1:5500/responsiveNavJS/ResponsiveNavigation2024-01-31/dashboard.html";

if (window.location.href === dashboardPage) {
  let dashboardUser = window.localStorage.getItem("user-data")
    ? JSON.parse(window.localStorage.getItem("user-data"))
    : {};

  if (
    !dashboardUser.first_name ||
    !dashboardUser.last_name ||
    !dashboardUser.email ||
    !dashboardUser.password
  ) {
    window.location.href =
      "http://127.0.0.1:5500/responsiveNavJS/ResponsiveNavigation2024-01-31/index.html";
  }
} else if (window.location.href === signUpPage) {
  let existingUser = window.localStorage.getItem("user-data")
    ? JSON.parse(window.localStorage.getItem("user-data"))
    : {};
  if (
    existingUser.first_name &&
    existingUser.last_name &&
    existingUser.email &&
    existingUser.password
  ) {
    window.location.href =
      "http://127.0.0.1:5500/responsiveNavJS/ResponsiveNavigation2024-01-31/dashboard.html";
  }
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
  const prev1 = document.getElementById("prev1");
  const next = document.getElementById("next");
  const signUp = document.getElementById("sign-up");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const emailField = document.getElementById("email");
  const passwordField = document.getElementById("password");
  const form1 = document.getElementById("form1");
  const form2 = document.getElementById("form2");

  // camel case
  function setInitialFormFields() {
    const user = window.localStorage.getItem("user-data")
      ? JSON.parse(window.localStorage.getItem("user-data"))
      : {};
    firstName.value = user.first_name ? user.first_name : "";
    lastName.value = user.last_name ? user.last_name : "";
    emailField.value = user.email ? user.email : "";
    passwordField.value = user.password ? user.password : "";
  }

  // call initial function
  setInitialFormFields();

  prev.addEventListener("click", submitForm);
  prev1.addEventListener("click", submitForm);
  next.addEventListener("click", submitForm);
  signUp.addEventListener("click", submitForm);

  firstName.addEventListener("change", function (e) {
    if (e.target.value) {
      e.target.classList.remove("error-message");
    }
  });
  lastName.addEventListener("change", function (e) {
    if (e.target.value) {
      e.target.classList.remove("error-message");
    }
  });
  emailField.addEventListener("change", function (e) {
    if (e.target.value) {
      e.target.classList.remove("error-message");
    }
  });
  passwordField.addEventListener("change", function (e) {
    if (e.target.value) {
      e.target.classList.remove("error-message");
    }
  });

  function submitForm(e) {
    e.preventDefault();
    const user = {
      first_name: firstName.value,
      last_name: lastName.value,
    };
    const form_two = {
      email: emailField.value,
      password: passwordField.value,
    };

    const id = e.target.getAttribute("id");
    if (id === "next") {
      // set user data to storage
      window.localStorage.setItem(
        "user-data",
        JSON.stringify({ ...user, ...form_two })
      );
      // firstName validation
      if (!firstName.value) {
        firstName.classList.add("error-message");
      } else {
        firstName.classList.remove("error-message");
      }
      // lastName validation
      if (!lastName.value) {
        lastName.classList.add("error-message");
      } else {
        lastName.classList.remove("error-message");
      }

      // end of step 1 || form 1
      if (!firstName.value || !lastName.value) {
        return;
      }

      // change form
      form1.classList.toggle("form--active"); // remove if present
      form2.classList.toggle("form--active"); // add if not present
    } else if (id === "prev") {
      // change form
      form1.classList.toggle("form--active"); // remove if present
      form2.classList.toggle("form--active"); // add if not present
    } else if (id === "prev1") {
      // change form
      form1.classList.toggle("form--active"); // remove if present
      form2.classList.toggle("form--active"); // add if not present
    } else if (id === "sign-up") {
      // email validation
      if (!emailField.value) {
        emailField.classList.add("error-message");
      } else {
        emailField.classList.remove("error-message");
      }

      // password validation
      if (!passwordField.value) {
        passwordField.classList.add("error-message");
        // terminate flow
      } else {
        passwordField.classList.remove("error-message");
      }

      // end of step 2 || form 2
      if (!emailField.value || !passwordField.value) {
        return;
      }
      // ternary operator
      const user = window.localStorage.getItem("user-data")
        ? JSON.parse(window.localStorage.getItem("user-data"))
        : {};

      // spread operator : it merges two objects together
      window.localStorage.setItem(
        "user-data",
        JSON.stringify({ ...user, ...form_two })
      );
      window.location.href =
        "http://127.0.0.1:5500/responsiveNavJS/ResponsiveNavigation2024-01-31/dashboard.html";
    }
  }
}
