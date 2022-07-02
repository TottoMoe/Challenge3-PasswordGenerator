// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var length = +prompt("Please enter the password length between 8 to 128 characters!");
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please press the Generate Password button again!");
    return false;
  } else {
    var lowerCase = confirm("Do you want to include Lowercase!");
    var upperCase = confirm("Do you want to include Uppercase!");
    var number = confirm("Do you want to include Number!");
    var symbol = confirm("Do you want to include Symbol!");
  }
  if (!lowerCase && !upperCase && !number && !symbol) {
    return;
  }
  var passwordNew = generatePassword(length,lowerCase, upperCase, number, symbol);
  var passwordText = document.querySelector("#password");
    
  passwordText.value = passwordNew;
  alert("Your password is: " + passwordNew);
}

// Generate Password
function generatePassword(length, lowerCase, upperCase, number, symbol) {
  console.log(length, lowerCase, upperCase, number, symbol);
  var password = "";
  for (var i = 0; i < length; i++) {
    var rdmChar = generater(0, 3);
    if (lowerCase && rdmChar === 0) {
      password += getRandomLower();
    } else if (upperCase && rdmChar === 1) {
      password += getRandomUpper();
    } else if (symbol && rdmChar === 2) {
      password += getRandomSymbol();
    } else if (number && rdmChar === 3) {
      password += generater(0, 9);
    } else {
      i--;
    }
  }
  return password;
  // console.log(password);
}


// Generate random char functions
function getRandomLower() {
  return String.fromCharCode(generater(97, 122));
}
// console.log(getRandomLower());

function getRandomUpper() {
  return String.fromCharCode(generater(65, 90));
}
// console.log(getRandomUpper());

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[generater(0, symbols.length - 1)];
}
// console.log(getRandomSymbol());

function generater(min = 0, max = 1) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}
// console.log(generater());


