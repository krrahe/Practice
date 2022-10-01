var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;
//I do not like they way prettier formats this
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// Var To Upper Case
var blackUpper = [];
var toUpper = function (x) {    
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);
// var for the numbers and all the special keys on the number row
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = [
  "!",
  "@",
  "#",
  "$",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
];
//Seriously, who thinks this looks nice

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start Function
function generatePassword() {
  // prompt for password length 
  passwordLength = prompt(
    "How many characters would you like your password? Choose between 8 and 128"
  );
  //prompt for what they want
  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("That wasn't a choice???");
  } else {
    confirmLower = confirm("Include lower case letters?");
    confirmUpper = confirm("Include upper case letters?");
    confirmNumber = confirm("Include numbers?");
    confirmSpecial = confirm("Include special characters?");
  }

  //if they picked everything
  if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, numbers, special);
  }
  // if they picked three
  else if (confirmLower && confirmUpper && confirmNumber) {
    userChoices = lowerCase.concat(upperCase, numbers);
  } else if (confirmLower && confirmUpper && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, special);
  } else if (confirmLower && confirmNumber && confirmSpecial) {
    userChoices = lowerCase.concat(numbers, special);
  } else if (confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = upperCase.concat(numbers, special);
  }
  // if they picked two
  else if (confirmLower && confirmUpper) {
    userChoices = lowerCase.concat(upperCase);
  } else if (confirmLower && confirmNumber) {
    userChoices = lowerCase.concat(numbers);
  } else if (confirmLower && confirmSpecial) {
    userChoices = lowerCase.concat(special);
  } else if (confirmUpper && confirmNumber) {
    userChoices = upperCase.concat(numbers);
  } else if (confirmUpper && confirmSpecial) {
    userChoices = upperCase.concat(special);
  } else if (confirmNumber && confirmSpecial) {
    userChoices = numbers.concat(special);
  }
  // if they wanted a simple password
  else if (confirmLower) {
    userChoices = lowerCase;
  } else if (confirmUpper) {
    userChoices = blankUpper.concat(upperCase);
  } else if (confirmNumber) {
    userChoices = numbers;
  } else if (confirmSpecial) {
    userChoices = special;
  }

  //var for password length
  var passwordBlank = [];

  // go through a loop for each choice
  for (var i = 0; i < passwordLength; i++) {
    var allChoices =
      userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
  }

  // combine everything and remove any spaces
  var password = passwordBlank.join("");
  var password = password.replace(" ", "");
  console.log(password.length);
  return password;
}
