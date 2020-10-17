// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passLength = 0;
  // Prompt and check for minimum reqs.
  do {
    passLength = prompt("Choose a desired password length, between 8-128 characters."); 
    if (passLength < 8 ||passLength > 128) {
      alert("Password does not meet requirements!");
    }
  } while (!(passLength > 7 && passLength < 129));
  
  // Arrays
  var upperSet = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  var lowerSet = ['abcdefghijklmnopqrstuvwxyz'];
  var numberSet = ['0123456789'];
  var symbolSet = [' !"#$%&()*+,-./:;<=>?@[^_`{|}~' + "'"];
  
  var uppercase, lowercase, numbers, symbols; // I don't know why this works but it does and I am too confused to figure out why! 
  var password = '';
  var usable ='';

  // Ask questions 
  while (!(uppercase || lowercase || numbers || symbols)) {

    uppercase = confirm("Do you want uppercase letters?");
    if (uppercase) {
      usable = upperSet; 
    }

    lowercase = confirm("Do you want lowercase letters?");
    if (lowercase) {
      usable += lowerSet; 

    numbers = confirm("Do you want a numeric characters?");
    if (numbers) {
      usable += numberSet; 
    }

    symbols = confirm("Do you want special characters?");
    if (symbols) {
      usable += symbolSet; 
    }

    // alert if outside parameters
    if (!(uppercase || lowercase || numbers || symbols)) {
      alert('At least one type of character should be selected!');
      usable = ''; 
    }
  }
  
  // Loop to generate password 
  for (var i = 1; i <= passLength; i++) {
    positon = Math.floor(Math.random() * (usable.length)); 
    password += usable.charAt(positon); 
  }
  
  return password;
}
}