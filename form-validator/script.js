"use strict";

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("confirmPassword");

// Show on invalid input
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show on success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Check valid email
function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value)) showSuccess(input);
  else showError(input, `${getFieldName(input)} is not valid`)
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    console.log(input);
    if (input.value.trim() === '') showError(input, `${getFieldName(input)} is required`)
    else showSuccess(input);
  });
}

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) showError(input, `${getFieldName(input)} must be at least ${min}`);
    else if (input.value.length > max) showError(input, `${getFieldName(input)} must be less than ${max}`);
    else showSuccess(input);
}

function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) showError(input2, 'Password do not match');
    else showSuccess(input2)
}

// Get field name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkEmail(email)
  checkLength(password, 6, 25);
  checkPassword(password, password2);
});
