// Create an input field for the email
const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.id = 'email';
emailInput.placeholder = 'Enter your email';
emailInput.required = true;
container.appendChild(emailInput);

// Create a button to trigger the signUp function
const signUpButton = document.createElement('button');
signUpButton.textContent = 'Sign Up';
signUpButton.onclick = signUp; // Assign the signUp function to the button's onclick event
container.appendChild(signUpButton);

// Create a div to display messages
const messageDiv = document.createElement('div');
messageDiv.id = 'message';
container.appendChild(messageDiv);

// Append the container to the body
document.body.appendChild(container);

// Define the signUp function
function signUp() {
    // Gets the email value from the input field.
    const email = document.getElementById('email').value.trim();

    // Email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Checks if the email field is not empty and is valid.
    if (email && emailPattern.test(email)) {
        // Displays a 'success' message after signing up.
        document.getElementById('message').textContent = `Thank you for signing up, ${email}!`;
    } else {
        // Displays an error message if the email field is left empty or invalid.
        document.getElementById('message').textContent = "Please enter a valid email address.";
    }
}