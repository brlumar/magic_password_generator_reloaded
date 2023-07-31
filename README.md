# magic_password_generator_reloaded
Site that generates a password based on user input of how many characters they want. 

Password Generator
This is a simple JavaScript password generator that allows users to generate a random password with various customizable options. The generator can create passwords with a combination of lowercase letters, uppercase letters, numbers, and special characters.

How to Use
Open the index.html file in your web browser.
Upon loading the page, you will see a "Generate Password" button along with a text area labeled "Your Secure Password."
Click the "Generate Password" button to initiate the password generation process.
A prompt will appear, asking you to provide the desired password length. Enter a number between 8 and 128, and click "OK."
Next, a series of prompts will ask you to choose which character types you want to include in the password:
Click "OK" to include lowercase letters.
Click "OK" to include uppercase letters.
Click "OK" to include numbers.
Click "OK" to include special characters.
If you don't select any character type, you will be prompted to try again.
After confirming your choices, the password will be generated and displayed in the text area labeled "Your Secure Password."
Script Explanation
The script.js file contains the JavaScript code responsible for generating the password.

Variables
lowercase: An array containing all lowercase letters of the alphabet.
uppercase: An array containing all uppercase letters of the alphabet.
numbers: An array containing digits 0 to 9.
specialCharacters: An array containing various special characters.
valueChecker: A boolean variable used to validate user input for password length.
pass: A string variable that holds the generated password.
allPossibleChars: An array that will store all possible characters to choose from based on the user's selections.
Functions
getUserInput(): This function prompts the user to provide the desired password length and character types. It ensures that the length is between 8 and 128 and returns an array with the user's choices.

generatePassword(allChars): This function takes an array of characters (allChars) as input and generates a random password of the desired length. It concatenates random characters from the allChars array and returns the generated password.

writePassword(): This function calls the generatePassword function with allPossibleChars as input and writes the generated password into the text area labeled "Your Secure Password."

Event Listener
The "Generate Password" button has an event listener attached to it, which triggers the writePassword() function when clicked, generating and displaying the password.

Customization
If you wish to customize the character sets used for password generation, you can modify the lowercase, uppercase, numbers, and specialCharacters arrays with your preferred characters.

Please note that this password generator is intended for educational purposes and should not be used for critical security purposes. For secure password management, consider using specialized password management software.


Site: https://brlumar.github.io/magic_password_generator_reloaded/
Repo: https://github.com/brlumar/magic_password_generator_reloaded