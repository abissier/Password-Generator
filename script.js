// Assignment Code

var generateBtn = document.querySelector("#generate");
// Get user input from prompts
// function getUserInfo () {

function getRequirements() {
    var passwordlength = prompt("How long is the password? 8-128");
    var upperCase = confirm("Do you want uppercase letters?");
    var lowerCase = confirm("Do you want lowercase letters?");
    var Numbers = confirm("Do you want numbers?");
    var Symbols = confirm("Do you want symbols?");
    console.log("Password Length: " + passwordlength);
    console.log("Contains Uppercase: " + upperCase);
    console.log("Contains Lowercase: " + lowerCase);
    console.log("Contains numbers: " + Numbers);
    console.log("Contains symbols: " + Symbols);


    // Write password to the #password input
    function writePassword(passwordlength, upperCase, lowerCase, Numbers, Symbols) {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");

        passwordText.value = password;
    }

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);

    //length prompt btw 8 characters and no more than 128 characters

    if (passwordlength >= 8 && passwordlength <= 128) {
        console.log("length" + passwordlength);
    } else {
        passwordlength = prompt("Please enter number bewtween 8-128");
    }

    //character type prompt lowercase, uppercase, numeric, and/or special characters w at least one type seclected 
    if (lowerCase === true) {
        function getRandomLower() {
            return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        }
        console.log(getRandomLower());
    }

    if (upperCase === true) {
        function getRandomUpper() {
            return String.fromCharCode(Math.floor(Math.random() * 26) + 64);
        }
        console.log(getRandomUpper());
    }

    if (Numbers === true) {
        function getRandomNumber() {
            return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
        }
        console.log(getRandomNumber());
    }

    if (Symbols === true) {
        function getRandomSymbol() {
            const symbols = "!@#$%[],.'";
            return symbols[Math.floor(Math.random() * symbols.length)];
        }
        console.log(getRandomSymbol());
    }


// for loop so password characters matches scharacter length 
for (var i = 0; i < passwordlength; i++) {
    document.querySelector("#password").innerHTML = password;
}
}

