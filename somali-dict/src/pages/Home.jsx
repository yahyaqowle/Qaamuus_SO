import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
        <h1>hi</h1>
      <header>
        
        
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dictionary">Dictionary</Link></li>
            <li><Link to="/vocabulary">Vocabulary</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        {/* Add your main content here */}
      </main>
      <footer>
        {/* Add your footer content here */}
      </footer>
    </div>
  );
};

export default Home;