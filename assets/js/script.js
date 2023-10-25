// Assignment Code
var generateBtn = document.querySelector("#generate");

var isValid;


var length;
var numbers;
var specialCharacters;
var upperCase;
var lowerCase;

var truePassword = "";


var numbers = "123456789";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "$#@%?*^!,+";


var allPossibleCharacters = [];



// Prompt User
function generatePassword(){
  var truePassword = ""
  length = prompt("Must enter a length between 8 and 128");
  if (isNaN(length) || length < 8 || length > 128){

    alert("Please enter a valid password length");
    isValid = false;
    return

  } else {
    isVaid = true;
  }
  if (isValid){
  numbers = confirm("Would you like to use numeric characters");
  specialCharacters = confirm("Would you like to use special characters?");
  lowerCase = confirm("Would you like to use lowercase Letters?");
  upperCase = confirm("Would you like to use uppercase Letters?");
  if (numbers === false && specialCharacters === false && lowerCase === false && upperCase === false ) {
    alert("Must select at least (1) character type");
    return
  }
  if (lowerCase === true ){
   allPossibleCharacters = allPossibleCharacters.concat(lowerCaseLetters)
  }
  if (upperCase === true) {
    allPossibleCharacters =  allPossibleCharacters.concat(upperCaseLetters)
  }
  if (specialCharacters === true) {
    allPossibleCharacters =  allPossibleCharacters.concat(specialCharacters)
  }
  if (numbers === true) {
    allPossibleCharacters =  allPossibleCharacters.concat(numbers)
  }
 for (var i = 0; i < length; i ++) {
  var randomIndex = Math.floor(Math.random()*allPossibleCharacters.length);
  truePassword += allPossibleCharacters[randomIndex];
 }
}
  return truePassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


