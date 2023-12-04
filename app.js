const form = document.querySelector(".form");
const message = document.querySelector(".message");
const validationBox = document.querySelector(".validation-box");

const email = document.getElementById("email-field");
const country = document.getElementById("country-field");
const zip = document.getElementById("zip-field");
const password = document.getElementById("password-field");
const passwordConf = document.getElementById("password-conf-field");

// Requirements:
// 1) Valid Email (@ sign and domain included)
// 2) Country selected
// 3) ZIP Code at least 5 characters
// 4) Password:
// - at least 5 characters
// - at least one number
// - at least one symbol
// - 
// Confirm Password:
// - has to match password

const validateForm = function (e) {
    e.preventDefault();
    const errors = [];

    // Email
    if (!email.checkValidity()){
        errors.push("&bull; Email must be valid.")
    }

    // Country
    if (!country.checkValidity()){
        errors.push("&bull; Please select a valid country.")
    }

    // ZIP
    if (!zip.checkValidity()){
        errors.push("&bull; ZIP code must be valid.")
    }

    // Password
    if (!password.checkValidity()){
        errors.push(`&bull; Password must be: 
        <br>- at least 5 characters
        <br>- contain at least one number
        <br>- contain at least one symbol`);
    }

    // Confirmation
    if (password.value && passwordConf.value && passwordConf.value !== password.value) {
        errors.push(`Passwords do not match.`);
    }

    // Error Message
    if (errors.length > 0){
        while (validationBox.firstChild){
            validationBox.removeChild(validationBox.firstChild)
        }

        for (let i = 0; i < errors.length; i++){
            const newError = document.createElement("p");
            newError.classList.add("message");
            newError.innerHTML = `${errors[i]}`;
            validationBox.appendChild(newError);
        }
    }
}

form.addEventListener("change", validateForm);