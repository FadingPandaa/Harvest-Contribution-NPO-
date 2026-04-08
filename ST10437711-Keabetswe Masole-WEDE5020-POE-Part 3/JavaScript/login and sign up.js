// Toggle between login and signup forms
function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
}

function showSignup() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}

// Validate login form
function validateLogin(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (username === "" || password === "") {
        document.getElementById('login-error').textContent = "Please fill in both fields.";
        return;
    }
    localStorage.setItem("loggedIn", "true");
    window.location.href = "index.html"; // Redirect to homepage upon successful login
}

// Validate signup form
function validateSignup(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const signupError = document.getElementById('signup-error');

    if (username.length < 5) {
        signupError.textContent = "Username must be at least 5 characters.";
        return;
    }
    if (!/^[^@]+@\w+(\.\w+)+\w$/.test(email)) {
        signupError.textContent = "Invalid email format.";
        return;
    }
    if (password.length < 8) {
        signupError.textContent = "Password must be at least 8 characters.";
        return;
    }

    signupError.textContent = "";
    console.log('Signup Data:', { username, email, password });
    alert("Signup successful! You can now login.");
    showLogin();
}