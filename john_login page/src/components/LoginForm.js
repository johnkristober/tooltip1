import React, { useState, useEffect } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Load saved email on component mount
  useEffect(() => {
    const savedEmail = localStorage.getItem('savedEmail');
    const wasRemembered = localStorage.getItem('rememberMe');

    if (savedEmail && wasRemembered === 'true') {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  // Validate email format
  const isValidEmail = (emailValue) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$|^[a-zA-Z0-9_]{3,}$/;
    return emailRegex.test(emailValue);
  };

  // Clear error for a field
  const clearError = (field) => {
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors = { email: '', password: '' };
    let isValid = true;

    if (email.trim() === '') {
      newErrors.email = 'Email or username is required';
      isValid = false;
    } else if (!isValidEmail(email.trim())) {
      newErrors.email = 'Please enter a valid email or username (min 3 characters)';
      isValid = false;
    }

    if (password === '') {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Save email if "Remember me" is checked
      if (rememberMe) {
        localStorage.setItem('savedEmail', email);
        localStorage.setItem('rememberMe', 'true');
      } else {
        localStorage.removeItem('savedEmail');
        localStorage.removeItem('rememberMe');
      }

      // Show success message
      setShowSuccess(true);

      // Reset form
      setEmail('');
      setPassword('');
      setShowPassword(false);
      setIsLoading(false);

      // Hide success message and alert after 2 seconds
      setTimeout(() => {
        alert('Login successful! In a real application, you would be redirected to the dashboard.');
        setShowSuccess(false);
      }, 2000);
    }, 1500);
  };

  // Handle forgot password
  const handleForgotPassword = (e) => {
    e.preventDefault();
    alert('Password reset functionality would be implemented here.');
  };

  // Handle signup
  const handleSignUp = (e) => {
    e.preventDefault();
    alert('Sign up page would be available here.');
  };

  return (
    <div className="login-card">
      <h1 className="login-title">Welcome Back</h1>
      <p className="login-subtitle">Please login to your account</p>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email or Username</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email or username"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              clearError('email');
            }}
            className={errors.email ? 'error' : ''}
            required
          />
          {errors.email && <span className="error-message show">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-input-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                clearError('password');
              }}
              className={errors.password ? 'error' : ''}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Toggle password visibility"
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
          {errors.password && <span className="error-message show">{errors.password}</span>}
        </div>

        <div className="form-options">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span>Remember me</span>
          </label>
          <a href="#" onClick={handleForgotPassword} className="forgot-password">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="login-button"
          disabled={isLoading}
        >
          {isLoading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>

      <div className="login-footer">
        <p>
          Don't have an account?{' '}
          <a href="#" onClick={handleSignUp} className="signup-link">
            Sign up
          </a>
        </p>
      </div>

      {showSuccess && (
        <div className="success-message show">
          <strong>Success!</strong> Login successful. Redirecting...
        </div>
      )}
    </div>
  );
}
