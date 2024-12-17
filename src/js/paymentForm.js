
const loginForm = document.querySelector('#loginForm');
const registerForm = document.querySelector('#registerForm');
const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');
document.getElementById("paymentForm").addEventListener("submit", function (e) {
  e.preventDefault(); 

  const cardNumber = document.getElementById("card-number").value.trim();
  const cvv = document.getElementById("cvv").value.trim();
  const expiryMonth = document.getElementById("expiry-month").value;
  const expiryYear = document.getElementById("expiry-year").value;
  const email = document.getElementById("email").value.trim();
  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const address1 = document.getElementById("address1").value.trim();
  const address2 = document.getElementById("address2").value.trim();
  const city = document.getElementById("city").value.trim();
  const state = document.getElementById("state").value;
  const zipCode = document.getElementById("zip-code").value.trim();

  let isValid = true;

  if (!/^\d{16}$/.test(cardNumber)) {
    alert("Invalid card number. It must be 16 digits.");
    isValid = false;
  }

  if (!/^\d{3,4}$/.test(cvv)) {
    alert("Invalid CVV. It must be 3 or 4 digits.");
    isValid = false;
  }

  if (expiryMonth === "" || expiryYear === "") {
    alert("Please select expiry month and year.");
    isValid = false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Invalid email address.");
    isValid = false;
  }

  if (firstName === "" || lastName === "") {
    alert("Please enter your first and last name.");
    isValid = false;
  }

  if (address1 === "") {
    alert("Address 1 cannot be empty.");
    isValid = false;
  }

  if (city === "") {
    alert("City cannot be empty.");
    isValid = false;
  }

  if (state === "") {
    alert("Please select a state.");
    isValid = false;
  }

  if (!/^\d{5,6}$/.test(zipCode)) {
    alert("Invalid zip code. It must be 5 or 6 digits.");
    isValid = false;
  }

  if (isValid) {
    alert("All fields are valid. Redirecting to home page...");
    window.location.href = "../html/home.html";
  }
});
