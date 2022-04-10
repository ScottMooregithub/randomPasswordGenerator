// Assignment code here
//available numbers in Random Password generator
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//available special chracters Random Pass word Generator
const symbols = ["@", "#", "$", "%", "^", "&"];
//Uses generates character codes that correlate to letters in JS
const characterCodes = Array.from(Array(26)).map((_, i) => i + 97);
//turns character codes from numbers into letters
const lowercaseletters = characterCodes.map((code) =>
  String.fromCharCode(code)
);
//takses const lowercaseletters and makes uppercase
const uppercaseletters = lowercaseletters.map((letter) => letter.toUpperCase());
console.log(uppercaseletters);

var generatePassword = function () {
  console.log("button clicked!");

  //prompt use whehter or not lowercase, uppercase, numeric, and/or special characters
  //validate input

  const allCharacters = [number, symbols, lowercaseletters, uppercaseletters];
  //return is necessary to pass the result of generatePassword into writePassword function
  return allCharacters;
};
//dont forget () at end of generatePassword
//display on page
console.log(generatePassword());

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  getPasswordLength();

  passwordText.value = password;
}

var getPasswordLength = function () {
  var lengthPrompt = window.prompt(
    " Password must be a minimum of 8 characters in length and a maximum of 128 characters in lenght"
  );

  // setting a variable called isValid equal to the result of calling
  // isPasswordLengthValid with a value of lengthPrompt
  // (lengthPrompt is what the user just typed in)
  var isValid = isPasswordLengthValid(lengthPrompt);
  console.log(isValid);
  if (isValid) {
    return lengthPrompt;
  } else {
    return getPasswordLength();
  }
};

// this is a function that accepts a paraemeter called password length and
// tells you whether that length is valid or not
var isPasswordLengthValid = function (passwordLength) {
  if (passwordLength === "" || passwordLength === null) {
    return false;
  }
  if (passwordLength < 8 || passwordLength > 128) {
    return false;
  }
  return true;
};
// document.getElementById("generate").onclick = function(){
//   alert("Password must be a minimum of 8 characters or a maximum of 28 characters long")
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
