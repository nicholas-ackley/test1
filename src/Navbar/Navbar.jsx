// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAboutClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToAbout, 100); // Delay to allow page navigation
    } else {
      scrollToAbout();
    }
  };

  return (
    <nav style={{ backgroundColor: '#333', padding: '1rem' }}>
      <Link to="/" style={{ color: '#fff', marginRight: '1rem' }}>Home</Link>
      <button
        onClick={handleAboutClick}
        style={{ color: '#fff', backgroundColor: 'transparent', border: 'none', cursor: 'pointer', marginRight: '1rem' }}
      >
        About
      </button>
      <Link to="/projects" style={{ color: '#fff' }}>Projects</Link>
    </nav>
  );
};

export default Navbar;
