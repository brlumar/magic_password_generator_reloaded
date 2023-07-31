// Assignment code here
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', '<', '>', '.', '?', '/'];
var valueChecker = false;

//var combined = [];
//var outputString = "";

//console.log('test');
function getUserInput() {


  var amount = Number(prompt('How many characters would you like in your password? Choose a number between 8 and 128.')); //changes the string into a number
  // if (amount >=8 && amount <=128){

  // }
  for (; valueChecker == false;) {
    if (amount < 8 || amount > 128) {
      var amount = Number(prompt('Your entry is not not between 8 and 128. Please provide an amount between 8 and 128.'));
    } else {
      valueChecker = true;  //assigns a value of true to end the loop
    }
  }


  var includeLowercase = confirm('Click OK to include lowercase letters.'); //prompts the user to confirm if they want lower. returns true or false
  var includeUppercase = confirm('Click OK to include uppercase letters.'); //prompts the user to confirm if they want upper. returns true or false
  var includeNumbers = confirm('Click OK to include numbers letters.'); //prompts the user to confirm if they want numbers. returns true or false
  var includeSpecialCharacters = confirm('Click OK to include special characters letters.'); //prompts the user to confirm if they want special Char. returns true or false

  //console.log(amount, includeLowercase, includeUppercase, includeNumbers, includeSpecialCharacters );

  return [amount, includeLowercase, includeUppercase, includeNumbers, includeSpecialCharacters]; //ex: return[50, true, true, true]
}

var choices = getUserInput();
console.log(choices);

var pass = ""; //holds the value for the generated password
var includeLowercase = choices[1]; //holds the boolean from the user input
var includeUppercase = choices[2];  //holds the boolean from the user input
var includeNumbers = choices[3];  //holds the boolean from the user input
var includeSpecialCharacters = choices[4];  //holds the boolean from the user input
var charAmount = choices[0];  //holds the number of characters desired in the password from the user input
var allPossibleChars = [];  //holds all the possible characters that the user selected for thier password



if (includeLowercase) { //adds the lowercase string to if true
  allPossibleChars = allPossibleChars.concat(lowercase);
}

if (includeUppercase) { //adds the uppercase string if true}
  allPossibleChars = allPossibleChars.concat(uppercase);
}

if (includeNumbers) {  //adds the numbers string if true}
  allPossibleChars = allPossibleChars.concat(numbers);
}

if (includeSpecialCharacters) {  //adds the special characters string if true}
  allPossibleChars = allPossibleChars.concat(specialCharacters);
};


//make this a function that repeats when the generate password button is pressed. 
function generatePassword(allChars) {

  for (var count = 0, pass = ''; count < charAmount; count++) { //pass=0 resets the password string

    //Grab a random caharcter from the allPossibleChars array
    var randomNum = Math.random();  //generates a random number between 0-1
    var randomIndex = Math.floor(randomNum * allChars.length); //Rounds the random number down and mulitplies it by the numbers in the string of characters to get a whole number
    var randomChar = allChars[randomIndex]; //uses the above whole number to select a random character
    pass += randomChar; //addes the current random character to pass

  }



  console.log("inside of function ", pass); //Just for me to see the password in the console for testing

  return pass;

} //end of the function generatePassword()

var password = generatePassword(allPossibleChars);

console.log(password);

if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialCharacters) {  //checks to make sure at least one character type was sellected. 
  document.write('Please try again and select at least one character type. Thanks!');  //displays "try again" message since no character type was sellected. 
} else {  //displays password since at least one character type was selected

  writePassword();

  //document.write("Your new password is:   "); //write a message to the screen

  //document.write(pass);   //displays the password
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(allPossibleChars);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
console.log("password varibable", password);
  console.log (passwordText);
  //passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
