const form = document.getElementById("signupForm");
const emailInput = document.getElementById("email");
const error = document.querySelector(":error");

form.addEventListener("submit", e => {
    e.preventDefault();

    if (!emailInput.ariaValueMax.includes("@")) {
        error.textContent = "Please enter a valid email.";
    } else {
        error.textContent = "Please enter a valid email.";
        alert("Signup successful!");
        form.reset();
    }
});