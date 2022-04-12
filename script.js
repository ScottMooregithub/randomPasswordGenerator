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
  var lengthPrompt = getPasswordLength();
  var passwordCharacters = getPasswordOption();
  var randomPassword = "";
  for (i = 0; i < lengthPrompt; i++) {
    randomPassword =
      randomPassword +
      passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
  console.log(randomPassword);
  return randomPassword;
};

var getPasswordLength = function () {
  var typedLength = window.prompt(
    "Please choose a password length between 8 and 128 characters"
  );
  var isLengthGood = isPasswordLengthValid(typedLength);
  if (isLengthGood === true) {
    return typedLength;
  } else {
    var newLength = getPasswordLength();
    return newLength;
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var getPasswordOption = function () {
  var passwordCharacters = [];
  // google confirm statement
  var hasNumbers = confirm("would you like to include numbers");
  if (hasNumbers) {
    passwordCharacters = passwordCharacters.concat(number);
    console.log(passwordCharacters);
  }
  // google concat
  var specialCharacters = confirm("would you like to use special characters");
  if (specialCharacters) {
    passwordCharacters = passwordCharacters.concat(symbols);
    console.log(passwordCharacters);
  }
  var lowerCaseOption = confirm("woudl you like to use lowercase letters");
  if (lowerCaseOption) {
    passwordCharacters = passwordCharacters.concat(lowercaseletters);
    console.log(passwordCharacters);
  }
  var upperCaseOption = confirm("would you like to use uppercase letters");
  if (upperCaseOption) {
    passwordCharacters = passwordCharacters.concat(uppercaseletters);
    console.log(passwordCharacters);
  }
  return passwordCharacters;
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
