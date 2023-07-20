// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- ENABLE STRICT MODE --

"use strict";

// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- WAIT UNTIL HTML DOM IS FULLY LOADED --

addEventListener("DOMContentLoaded", (e) => {

    // ---- ---- ---- ---- ---- ---- ---- ---- 

    // -- HTML ITEMS ACCESS --

    // Items to create password parameters.
    let passwordSize = document.getElementById("size");
    let includePasswordNumbers = document.getElementById("numbers");
    let includePasswordCapitalLetters = document.getElementById("capital-letters");
    let includePasswordSpecialCharacters = document.getElementById("special-characters");

    // Items to create and display password.
    let generateRandomPasswordBtn = document.getElementById("generate-random-password-btn");
    let passwordGenerated = document.getElementById("password-generated");

    // ---- ---- ---- ---- ---- ---- ---- ---- 

    // -- LISTENER TO CREATE RANDOM PASSWORD --

    addEventListener("contextmenu", (e) => {

        e.preventDefault();
    });

    addEventListener("keydown", (e) => {

        if (e.key === "Enter") generateRandomPassword();
    });

    generateRandomPasswordBtn.addEventListener("click", (e) => {

        generateRandomPassword();
    });

    function generateRandomPassword() {

        // ---- ---- ---- ---- ---- ---- ---- ---- 

        // -- INITIAL PASSWORD TEMPLATE --

        // Default password generation avaiable characters.
        let avaiablePasswordChars = "abcdefghijklmnopqrstuvwxyz";

        // ---- ---- ---- ---- ---- ---- ---- ---- 

        // -- ADD PASSWORD FILTERS -- 

        // Add Capital Letters.
        if (includePasswordCapitalLetters.checked) {
            avaiablePasswordChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }

        // Add Numbers.
        if (includePasswordNumbers.checked) {
            avaiablePasswordChars += "0123456789";
        }

        // Add Special Characters.
        if (includePasswordSpecialCharacters.checked) {
            avaiablePasswordChars += "¡!¿?#$%&/()=@";
        }

        // ---- ---- ---- ---- ---- ---- ---- ---- 

        // -- PASSWORD GENERATION --

        // Variable to store random password.
        let password = "";

        if (passwordSize.value <= 0) passwordSize.value = 10;
        if (passwordSize.value > 100) passwordSize.value = 100;

        for (let i = 0; i < passwordSize.value; i++) {

            // Get a random char from avaiablePasswordChars to create the password.
            let random = Math.floor(Math.random() * avaiablePasswordChars.length);

            // Add character to password.
            password += avaiablePasswordChars.charAt(random);
        }

        // Show generated password on HTML element.
        passwordGenerated.innerHTML = password;
    }
});

// ---- ---- ---- ---- ---- ---- ---- ---- 