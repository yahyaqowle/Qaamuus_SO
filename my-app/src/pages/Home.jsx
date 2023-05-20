import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Search from '../components/Search'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <h1>Welcome to Qaamuus</h1>
      <p>Explore and expand your Somali vocabulary.</p>
      {/* Additional content for the Home page */}
      <Footer />
    </div>
  );
}

export default Home;
