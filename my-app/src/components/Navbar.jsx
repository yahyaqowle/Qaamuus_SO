import React from 'react';
import Dictionary from '../pages/Dictionary';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/Dictionary.jsx">Dictionary.jsx</a></li>
        <li><a href="/vocabulary">Vocabulary</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
