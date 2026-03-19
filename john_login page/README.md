# React Login Page

A modern, responsive login page built with React.js.

## Project Structure

```
├── public/
│   └── index.html          # React root HTML file
├── src/
│   ├── components/
│   │   └── LoginForm.js    # Login form component
│   ├── App.js              # Main app component
│   ├── App.css             # App styling
│   └── index.js            # React entry point
├── package.json            # Project dependencies
└── .gitignore              # Git ignore rules
```

## Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- **Form Validation**: Real-time email/username and password validation
- **Password Toggle**: Show/hide password with eye icon
- **Remember Me**: Save email with localStorage
- **Error Handling**: Clear, user-friendly error messages
- **Loading State**: Button feedback during form submission
- **Responsive Design**: Mobile-friendly layout
- **Success Message**: Feedback after successful login
- **React Hooks**: Uses useState and useEffect for state management

## Components

### LoginForm Component

The main login form component that handles:

- Email/username input validation
- Password input with visibility toggle
- Remember me functionality
- Error state management
- Form submission logic

## Available Scripts

- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App (not reversible)

## Technologies Used

- **React 18.2.0** - UI library
- **React DOM** - React rendering library
- **React Scripts** - Build and development tools

## Notes

- All original functionality from the vanilla JS version has been preserved
- The component uses React hooks (useState, useEffect) for state management
- Styling remains the same with a beautiful gradient background
- localStorage is used for the "Remember me" feature
