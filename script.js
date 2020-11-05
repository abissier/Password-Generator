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


// Get user input from prompts

var pLength = prompt("Please enter length of password you would like generated (8-126 characters)");
var pLower = confirm("Would you like to include lower case letters in the passord?");
var pUpper = confirm("Would you like to include upper case letters in the passord?");
var pNumeric = confirm("Would you like to include numeric characters letters in the passord?");
var pSpecial = confirm("Would you like to include special characters in the passord?");


//length prompt btw 8 characters and no more than 128 characters

if (pLength >= 8) {
    console.log("length" + pLength);
} else {

    console.log("Please enter a valid number between 8-126");

}


//character type prompt lowercase, uppercase, numeric, and/or special characters w at least one type seclected 
if (pLower === true) {
    function getRandomLower() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
}

if (pUpper === true) {
    function getRandomUpper() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 64);
    }
}

if (pNumeric === true) {
    function getRandomNumber() {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
}

if (pSpecial === true) {
    function getRandomSybol() {
        const symbols = "!@#$%"
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
}