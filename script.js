// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//This function generates a random password based upon user prompts
function generatePassword() {
  return "temporary password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
