 // Assignment code here

 // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


  //character types array
  var specialCharacters = ["!", "", "#", "$", "%", "&", " ' ", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//empty vars to generate password from
  var pwdArray = [];
  var password = "";
  var pwdLength = 0;

//function to validate user answers
function userChoices() {
//create vars to hold answer to prompt/confirm
pwdLength = prompt("Enter desired password length between 8-128 characters");
// let pwdLength = prompt("Type desired password length between 8-128 characters", "8 - 128 characters");
// console.log(pwdLength);
if (pwdLength >= 8 && pwdLength <= 128) {
  if (confirm("Desired password length recorded!")); 
} else {
  alert("You MUST choose a number between 8-128");
  return null;
}

//confirm - lowercase, uppercase, numeric, special characters
var wantsLowerCase = confirm('Click OK to include lowercase letters or CANCEL to omit lowercase letters.');
// console.log(wantsLowerCase);
var wantsUpperCase = confirm('Click OK to include uppercase letters or CANCEL to omit uppercase letters.');
// console.log(wantsUpperCase);
var wantsNumbers = confirm('Click OK to include numbers or CANCEL to omit numbers.');
// console.log(wantsNumbers);
var wantsSpecialChar = confirm('Click OK to include special characters or CANCEl to omit special characters.');
// console.log(wantsSpecialChar);

// if (wantsLowerCase) {
//   console.log(wantsLowerCase);
// } else {
//   console.log(wantsLowerCase);
// }

//user choices for lowercase, uppercase, numbers, special character, pwdLength SAVED to object
var user = {
  yesLowerCase: wantsLowerCase,
  yesUpperCase: wantsUpperCase,
  yesNumbers: wantsNumbers,
  yesSpecialChar: wantsSpecialChar,
  totalLength: pwdLength
}
// console.log(user);


//If user chooses lowercase, add to pwdArray
if (user.yesLowerCase) {
  pwdArray.push(lowerCase);
}
  // console.log(pwdArray);

//If user chooses uppercase, add to pwdArray
if (user.yesUpperCase) {
  pwdArray.push(upperCase);
}
  // console.log(pwdArray);

//If user chooses numbers, add to pwdArray
if (user.yesNumbers) {
  pwdArray.push(numbers);
}
  // console.log(pwdArray);

//If user chooses special characters, add to pwdArray
if (user.yesSpecialChar) {
  pwdArray.push(specialCharacters);
}


  // console.log(pwdArray);
  //check to see if anything in pwdArray if not, alert user call function userChoices
} 

function generatePassword () {
  userChoices();

// merge nested arrays in pwdArray
var merged = pwdArray.flat(1);
console.log(merged);

// //convert array to string
// let mergedString = merged.join("");
// console.log(mergedString);

//Choose random character
var randomCharacters = "";
// console.log(randomCharacters);

//generate random password with pwdLength and randomCharacters
for (var i = 0; i <= pwdLength-1; i++) {
  var randomCharacters = Math.floor(Math.random() * merged.length);
  
  // password += mergedString.substring(randomCharacters, randomCharacters +1);
  // password += mergedString[randomCharacters];
    password += merged[randomCharacters];
console.log(randomCharacters);
}


 return password;
console.log(password);
}
//end of generatePassword function


