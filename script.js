// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
var pwLength = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  userPassword = "";
  passwordCharSet = "";

  // ask user the length of password
  var pwLength = prompt("Please enter how long you want your password to be");
  // check if password is between 8 & 128
  if (pwLength >= 8 && pwLength <= 128) {
    password.length = pwLength;
    console.log(password.length);
  } else {
    alert("password must be between 8-128 long");
  }

  // ask user if they want lowercase letters
  var isLowerCase = confirm("Do you want lowercase letters on your password?");
  // ask user if they want uppercase
  var isUpperCase = confirm("Do you want uppercase letters on your password?");
  // ask user if they want numbers
  var isNumeric = confirm("Do you want numbers on your password?");
  // ask user if they want special characters
  var hasSpecialChars = confirm(
    "Do you want sepcial characters on your password?"
  );

  if (isLowerCase === true) {
    passwordCharSet += lowercase;
  }
  if (isUpperCase === true) {
    passwordCharSet += uppercase;
  }
  if (isNumeric === true) {
    passwordCharSet += numbers;
  }
  if (hasSpecialChars === true) {
    passwordCharSet += specialCharacters;
  }
  for (var i = 0; i < pwLength; i++) {
    userPassword +=
      passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)];
  }
  console.log(userPassword);
  return userPassword;
}

// Copy to clipboard
function copyToClipboard() {
  var Copytoclipboard = document.getElementById("password");

  Copytoclipboard.select();
  Copytoclipboard.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied the text: " + Copytoclipboard.value);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyToClipboard);
