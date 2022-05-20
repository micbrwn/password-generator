//
// GLOBAL VARIABLES


// Create an array of special characters and store to a variable
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "+", "?",'.', ',', ';', ':', '<', '>', '/', '[', ']', '{', '}', "-", '_', '+', '=', '`', '~'];
// Create an array of numeric charecters and store it to a variable
var numericChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// Create an array of uppercase characters and store it to a variable
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// Ccreate an array of lowercase characters and store it to a variable
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];// ==========================================
// Function to get options from user input
// ==========================================
// function generatePassword() {
//   var userInput = ""
  

// Store the length of password from user input to a variable and convert it to an interger
var passwordLength = userPasswordLength();
// Check the length of password from user input if it is in the value range
getPasswordLength = true;
// Store the confirmation to include special characters from user input to a variable
var specialChar = random('special');
// Store the confirmation to include numeric characters from user input to a variable
var numericChar = random('numeric');
// Store the confirmation to include uppercase characters from user input to a variable
var upperCase = random('uppercase');
// Store the confirmation to include lowercase characters from user input to a variable
var lowerCase = random('lowercase'); 
// Create an object to store all the values of user input
// var keyCode = {
//   specialCharacter: "special",
//   number: "numeric",
//   lower: "lowercase",
//   upper: "uppercase"
// };
// // return the object to the caller
// return;
// }
// =================================================
// Function to generate password - generatePassword
// =================================================

// Call user option function and store the return object to a variable

// If the retured object does not exist, return null to the caller to exit the function

// Create a varialbe to be assigned with an empty array initially, to be populated by concatenating
// all posiible character sets chosen by user

// Create a variable to be assigned with an empty array initially, to be populated with one character
// from all character sets chosen by user.
// It is to guarrantee that at least one character from the chosen character set will be included in password

// Create a variable to be assigned with an empty array initially, to be populated with password

// Create a conditional statement: 1) to add array of special characters into array of possible characters based on user input
// 2) to push a random special character to the array of guaranteed characters

// Create a conditional statement: 1) to add array of numeric characters into array of possible characters based on user input
// 2) to push a random numeric character to the array of guaranteed characters

// Create a conditional statement: 1) to add array of uppercase characters into array of possible characters based on user input
// 2) to push a random uppercase character to the array of guaranteed characters

// Create a conditional statement: 1) to add array of lowercase characters into array of possible characters based on user input
// 2) to push a random lowercase character to the array of guaranteed characters

// For loop to iterate over the password length from the retuned object of options based on user input,
// selecting random indices from the array of possible characters and adding those characters into the password array variable

// For loop to iterate over the length of the guaranteed array, replacing the first few characters in the password array with the characters in the guarantee array

// Convert the password array into password string

// Return the converted password string to the caller


// Get references to the #generate element




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create function generatePassword
function generatePassword() {
  // ...arguments
  var length = prompt('Please enter a password length between 8 and 128 characters.');
  console.log(length);

if (length === NaN) {
  return;
}



  // return aPassString;
    return "mypassword";
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 