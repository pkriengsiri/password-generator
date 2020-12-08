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

  //Prompts the user to select a number between 8-128
  var passwordLength = prompt("How many characters would you like in your password? \n(Please enter a number between 1-128)");

  //Prompts the user to enter a new value if length is not between 8-128
  while(passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("The password must be between 8 and 128 characters. \nPlease select a number between 8-128.")
  }

  console.log("Password length: "+passwordLength);

  //Asks the user to confirm if lowercase characters must be included
  var includeLowerCase =  confirm("Do you want to include lowercase characters?");
  console.log("Include lowercase characters: "+includeLowerCase);

  //Asks the user to confirm if uppercase characters must be included
  var includeUpperCase =  confirm("Do you want to include lowercase characters?");
  console.log("Include uppercase characters"+includeUpperCase)

  //Asks the user to confirm if numbers characters must be included
  var includeNumeric =  confirm("Do you want to include numeric characters?");
  console.log("Include numeric characters"+includeNumeric)

  //Asks the user to confirm if special characters must be included
  var includeSpecial =  confirm("Do you want to include special characters?");
  console.log("Include special characters"+includeSpecial)



   





  return "temporary password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
