// prompt the user how many characters 8-128
// confirm if user wants uppercase, lowercase letters
// confirm if user wants numbers
// confirm if user wants special characters


var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//console.log(lowerCase);

var upperCase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//console.log(upperCase);

var numbers=["0","1","2","3","4","5","6","7","8","9"];
//console.log(numbers);

var symbols=["!","@","#","$","%","&","*","+"];
//console.log(symbols);

//prompt user for password length, upper, lower, symbols



function passwordOptions() {
  var userLength=parseInt(prompt("How many characters do you want your password to be? Please choose between 8-128 characters."));
  console.log(userLength);
  //var is being loaded with pw length
  if(Number.isNaN(userLength)){
    alert("password length must be a number")
    return null;
  }

  if(userLength<8){
    alert("password must be a minimum of 8 characters")
    return null
  }

  if(userLength>128){
    alert("password cant be more than 128 characters")
    return null
  }
  
  var userLowerCase=confirm("Do you want lowercase letters?")
  console.log(userLowerCase);
  
  var userUpperCase=confirm("Do you want uppercase letters?")
  console.log(userUpperCase);

  var userNumbers=confirm("Do you want numbers?")
  console.log(userNumbers);
  
  var userSymbols=confirm("Do you want special characters?")
  console.log(userSymbols);

  if(userLowerCase === false && userUpperCase === false && userNumbers === false && userSymbols === false ){
    alert('Must choose one option.') 
    return null
  }

  var passwordResponse = {
    length:userLength,
    hasLowerCaseChars: userLowerCase,
    hasUpperCaseChars: userUpperCase,
    hasNumbers: userNumbers, 
    hasSpecialChars: userSymbols,

  }

  return passwordResponse
}

function random(arr){
  var index = Math.floor(Math.random() * arr.length)
  var array = arr[index]
  return array
}

function generatePassword(){
  // this brings in the values from the prompts
  var options = passwordOptions();

  // create empty arrays to hold the password characters
  var result = []

  var possibleChars = []

  var chosenChars = []

  // if the options variable exists move forward if not exit

  if(!options){
    return null
  }
// if certain keys are available in options object we will push to the chosenChars array
  if(options.hasNumbers){
    possibleChars = possibleChars.concat(numbers)
    chosenChars.push(random(numbers))
  }
  if(options.hasLowerCaseChars){
    possibleChars = possibleChars.concat(lowerCase)
    chosenChars.push(random(lowerCase))
  }
  if(options.hasUpperCaseChars){
    possibleChars = possibleChars.concat(upperCase)
    chosenChars.push(random(upperCase))
  }
  if(options.hasSpecialChars){
    possibleChars = possibleChars.concat(symbols)
    chosenChars.push(random(symbols))
  }

  // need to create a loop to iterate over the password length

  for (var i = 0; i < options.length; i++) {
    var randomChars = random(possibleChars)
    result.push(randomChars)
    
  }
//  loop over the chosenChars array and pass info into result array
  for (var i = 0; i < chosenChars.length; i++) {
    result[i]= chosenChars[i]
    
  }
  // return all as a string
  return result.join('');

}

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
