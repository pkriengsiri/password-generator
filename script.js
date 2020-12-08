// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//This function will generate select a random character from a string of characters
function getRandomCharacter(stringOfCharacters) {
  var randomNumber = Math.floor(Math.random() * stringOfCharacters.length);
  return stringOfCharacters[randomNumber];
}

//This function generates a random password based upon user prompts
function generatePassword() {

    //variable for the generated password
    var generatedPassword = "";

    //Strings of lowercase, uppercase, numeric, and special characters

    var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    var numericCharacters = "01234567890";
    var specialCharacters = "!@#$%^&*()";

    //Empty array of user selected characters

    var requiredCharactersArray = [];

  //Prompts the user to select a number between 8-128
  var passwordLength = prompt("How many characters would you like in your password? \n(Please enter a number between 8-128)");

  //Prompts the user to enter a new value if length is not between 8-128
  while(passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("The password must be between 8 and 128 characters. \nPlease select a number between 8-128.")
  }

  console.log("Password length: "+passwordLength);

  //Asks the user to confirm if lowercase characters must be included
  var includeLowerCase =  confirm("Do you want to include lowercase characters?");
  console.log("Include lowercase characters: "+includeLowerCase);
  //Add string of lowercase characters to requiredCharactersArray if prompt is true
  if(includeLowerCase) {
    requiredCharactersArray.push(lowerCaseCharacters);
  }

  //Asks the user to confirm if uppercase characters must be included
  var includeUpperCase =  confirm("Do you want to include uppercase characters?");
  console.log("Include uppercase characters: "+includeUpperCase);
  //Add string of uppercase characters to requiredCharactersArray if prompt is true
  if(includeUpperCase) {
    requiredCharactersArray.push(upperCaseCharacters);
  }

  //Asks the user to confirm if numbers characters must be included
  var includeNumeric =  confirm("Do you want to include numeric characters?");
  console.log("Include numeric characters: "+includeNumeric);
  //Add string of numeric characters to requiredCharactersArray if prompt is true
  if(includeNumeric) {
    requiredCharactersArray.push(numericCharacters);
  }

  //Asks the user to confirm if special characters must be included
  var includeSpecial =  confirm("Do you want to include special characters?");
  console.log("Include special characters: "+includeSpecial);
  //Add string of special characters to requiredCharactersArray if prompt is true
  if(includeSpecial) {
    requiredCharactersArray.push(specialCharacters);
  }

  console.log("Required characters array contains"+requiredCharactersArray.length);

  
  //Add a random character for a random special character type to the password

  for(var i = 0; i < passwordLength; i++) {
    
    //random number for number of elements in requiredCharactersArray
    var random = Math.floor(Math.random() * requiredCharactersArray.length);

    console.log("Random number is "+random);
    console.log("String at requiredCharacterArray element "+random+" is "+requiredCharactersArray[random]);
    var randomCharacter = getRandomCharacter(requiredCharactersArray[random]);
    console.log("Random character is "+ randomCharacter);
    
    generatedPassword = generatedPassword.concat(randomCharacter);
    console.log("Generated password is "+generatedPassword);
  }

  
  return generatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
