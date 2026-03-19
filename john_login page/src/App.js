import React, { useState, useEffect } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';

export default function App() {
  return (
    <div className="login-container">
      <LoginForm />
    </div>
  );
}
