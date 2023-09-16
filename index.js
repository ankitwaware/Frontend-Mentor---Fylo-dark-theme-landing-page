"use scrict";

// listener on common parent
document.querySelector(".nav-list").addEventListener("click", function (e) {
  e.preventDefault();

  //  matching statargey
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    // smooth scrolling
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const error = document.querySelector(".error-msg ");
const inputEmail = document.querySelector(".input-email");

function validateEmail() {
    
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value)) {
    error.classList.add("hide");
    alert("Thanks For subscribe");
  } else {
    error.classList.remove("hide");
  }
}

function removeerror () {
    error.classList.add("hide");
}
