// Assignment Code
var passwordLength = null;
var upperCase = null;
var lowerCase = null;
var numbers = null;
var symbols = null;

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Get user input from prompts
getRequirements();

function getRequirements() {
    passwordLength = prompt("How long is the password? 8-128");
    if (passwordLength >= 8 && passwordLength <= 128) {
        console.log("length" + passwordLength);
    } else {
        passwordLength = prompt("Please enter number bewtween 8-128");
    }
    upperCase = confirm("Do you want uppercase letters?");
    lowerCase = confirm("Do you want lowercase letters?");
    numbers = confirm("Do you want numbers?");
    symbols = confirm("Do you want symbols?");
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword(passwordLength, upperCase, lowerCase, numbers, symbols);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

//create function to generate the password & push into array
function generatePassword(passwordLength, upperCase, lowerCase, numbers, symbols) {
    var password = "";
    var functions = [];

    if (lowerCase) {
        functions.push(getRandomLower);
    }
    if (upperCase) {
        functions.push(getRandomUpper);
    }
    if (numbers) {
        functions.push(getRandomNumber);
    }
    if (symbols) {
        functions.push(getRandomSymbol);
    }

    // concatinates var f's into password string until for loop reaches password length 
    for (var i = 0; i < passwordLength; i++) {
        var f = functions[Math.floor(Math.random() * functions.length)];
        password = password.concat("", f());
    }

    return password;
}

//functions to get random upper, lower, number, and symbol 
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = "!@#$%[],.'";
    return symbols[Math.floor(Math.random() * symbols.length)];
}
