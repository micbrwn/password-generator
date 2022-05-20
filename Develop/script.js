var specialCh = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "?", '.', ',', ';', ':', '<', '>', '/', '[', ']', '{', '}', "-", '_', '+', '=', '`', '~'];
var numericCh = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// var upperCaseArray = upperCaseST.split("");
// var lowerCaseArray = lowerCaseSt.split("");
// var specialArray = specialChST.split("")
// var numericArray = numericChST.split("")
// var passwordLength = userPasswordLength();

// Assignment Code

// Create function generatePassword
function generatePassword() {
  // ...arguments
  var passLength = prompt('Please enter a password length between 8 and 128 characters.');
  console.log(passLength, typeof passLength);
  passLength = parseInt(passLength);   //converts string to number *** Important
  console.log(passLength, typeof passLength);


  if (isNaN(passLength)) {    ///Must be written as a function. Cannot set (passLength === to NaN)
    passLength = alert("You must enter a value");

  }
  else if (passLength < 8 || passLength > 128) {
    passLength = alert("The password length must be between 8 and 128");
    return;
  }
  else {

    var specialChars = confirm("Do you want your password to contain special character?");  //include
    console.log(specialChars);

    var numericChars = confirm("Do you want your password to contain number?");  //include
    console.log(numericChars);
    var lowerCaseChars = confirm("Do you want your password to contain lower case letters?");  //include
    console.log(lowerCaseChars);
    var upperCaseChars = confirm("Do you want your password to contain uppercase letters?");  //include
    console.log(upperCaseChars);

  };

  if (specialChars === false && numericChars === false && lowerCaseChars === false && upperCaseChars === false) {
    alert("You must make a selection");
    return;
  }

  var array = [];

  if (specialChars && numericChars && upperCaseChars && lowerCaseChars) {
    array = specialCh.concat(numericCh, upperCase, lowerCase);
  }

  else if (specialChars && numericChars && upperCaseChars) {
    array = specialCh.concat(numericCh, upperCase);
  }

  else if (specialChars && numericChars && lowerCaseChars) {
    array = specialCh.concat(numericCh, lowerCase);
  }

  else if (specialChars && lowerCaseChars && upperCaseChars) {
    array = specialCh.concat(lowerCase, upperCase);
  }

  else if (numericChars && lowerCaseChars && upperCaseChars) {
    array = numericCh.concat(lowerCase, upperCase);
  }

  else if (specialChars && numericChars) {
    array = specialCh.concat(numericCh);
  }

  else if (specialChars && lowerCaseChars) {
    array = specialCh.concat(lowerCase);
  }

  else if (specialChars && upperCaseChars) {
    array = specialCh.concat(upperCase);
  }

  else if (lowerCaseChars && numericChars) {
    array = lowerCase.concat(numericCh);
  }

  else if (lowerCaseChars && upperCaseChars) {
    array = lowerCase.concat(upperCase);
  }

  else if (numericChars && upperCaseChars) {
    array = numericCh.concat(upperCase);
  }

  else if (specialChars) {
    array = specialCh;
  }

  else if (numericChars) {
    array = numericCh;
  }

  else if (lowerCaseChars) {
    array = lowerCase;
  }

  else if (upperCaseChars) {
    array = upperCase;
  };
  console.log(array);



  var password = [];

  for (var i = 0; i < passLength; i++) {
    var passSelect = array[Math.floor(Math.random() * (array.length))];
    password.push(passSelect);
  };
  // console.log(array.length);

  var aPassString = password.join('');

  return aPassString;
  return "mypassword";




};

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
