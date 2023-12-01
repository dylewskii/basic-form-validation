const form = document.querySelector(".form");
const message = document.querySelector(".message");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateZip;
})

// const email = document.getElementById("email-field");
// const validateEmail = function() {
//     console.log(email.validity);
// }

// const country = document.getElementById("country-field");
// const validateCountry = function() {
//     console.log(country.validity);
// }

const zip = document.getElementById("zip-field");
const validateZip = function() {
    if (!zip.validity){
        message.textContent = validationMessage;
    }
}



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
