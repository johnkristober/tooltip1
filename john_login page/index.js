// Get form elements
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const togglePasswordBtn = document.getElementById('togglePassword');
const rememberMeCheckbox = document.getElementById('rememberMe');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');

// Load saved email if "Remember me" was checked
window.addEventListener('DOMContentLoaded', () => {
    const savedEmail = localStorage.getItem('savedEmail');
    const wasRemembered = localStorage.getItem('rememberMe');

    if (savedEmail && wasRemembered === 'true') {
        emailInput.value = savedEmail;
        rememberMeCheckbox.checked = true;
    }
});

// Toggle password visibility
togglePasswordBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePasswordBtn.textContent = type === 'password' ? '👁️' : '🙈';
});

// Clear error messages on input
emailInput.addEventListener('input', () => {
    removeError(emailInput, emailError);
});

passwordInput.addEventListener('input', () => {
    removeError(passwordInput, passwordError);
});

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$|^[a-zA-Z0-9_]{3,}$/;
    return emailRegex.test(email);
}

// Show error message
function showError(inputElement, errorElement, message) {
    inputElement.classList.add('error');
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

// Remove error message
function removeError(inputElement, errorElement) {
    inputElement.classList.remove('error');
    errorElement.textContent = '';
    errorElement.classList.remove('show');
}

// Validate form
function validateForm() {
    let isValid = true;

    // Email validation
    if (emailInput.value.trim() === '') {
        showError(emailInput, emailError, 'Email or username is required');
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, emailError, 'Please enter a valid email or username (min 3 characters)');
        isValid = false;
    }

    // Password validation
    if (passwordInput.value === '') {
        showError(passwordInput, passwordError, 'Password is required');
        isValid = false;
    } else if (passwordInput.value.length < 6) {
        showError(passwordInput, passwordError, 'Password must be at least 6 characters');
        isValid = false;
    }

    return isValid;
}

// Handle form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Clear previous errors and messages
    removeError(emailInput, emailError);
    removeError(passwordInput, passwordError);
    successMessage.classList.remove('show');

    // Validate form
    if (!validateForm()) {
        return;
    }

    // Disable button during submission
    const loginButton = loginForm.querySelector('.login-button');
    const originalButtonText = loginButton.textContent;
    loginButton.disabled = true;
    loginButton.textContent = 'Signing in...';

    // Simulate API call
    setTimeout(() => {
        // Save email if "Remember me" is checked
        if (rememberMeCheckbox.checked) {
            localStorage.setItem('savedEmail', emailInput.value);
            localStorage.setItem('rememberMe', 'true');
        } else {
            localStorage.removeItem('savedEmail');
            localStorage.removeItem('rememberMe');
        }

        // Show success message
        successMessage.classList.add('show');

        // Reset button
        loginButton.disabled = false;
        loginButton.textContent = originalButtonText;

        // Reset form
        loginForm.reset();
        passwordInput.setAttribute('type', 'password');
        togglePasswordBtn.textContent = '👁️';

        // Simulate redirect after 2 seconds
        setTimeout(() => {
            alert('Login successful! In a real application, you would be redirected to the dashboard.');
            successMessage.classList.remove('show');
        }, 2000);
    }, 1500);
});
// Handle forgot password link
document.querySelector('.forgot-password').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Password reset functionality would be implemented here.');
});

// Handle signup link
document.querySelector('.signup-link').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Sign up page would be available here.');
});
