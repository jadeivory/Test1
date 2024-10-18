// Sample username (email) and password
const validUsername = "user123@example.com"; // Update to a valid email format
const validPassword = "password123";

let loginAttempts = 0;

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Validate credentials
    if (username === validUsername && password === validPassword) {
        window.location.href = "Product.html"; // Redirect to products page
    } else {
        loginAttempts++;
        errorMessage.textContent = "Incorrect username or password";

        // Lock out after 3 failed attempts
        if (loginAttempts >= 3) {
            window.location.href = "Home.html"; // Redirect to error page after 3 tries
        }
    }
});
