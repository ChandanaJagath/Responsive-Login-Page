const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

const loginForm = document.getElementById("loginForm");  // validate 
const loginMessage = document.getElementById("loginMessage");

const username = "jagath";
const password = "1234";

function validateCredentials() {
  const enteredUsername = loginForm.username.value.trim();
  const enteredPassword = loginForm.password.value.trim();

  if (enteredUsername === username && enteredPassword === password) {
    loginMessage.textContent = "Login successful !";
    loginMessage.style.color = "green";
    return true;
  } else {
    loginMessage.textContent = "Invalid username or password !";
    loginMessage.style.color = "red";
    return false;
  }
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validateCredentials();
});
