import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning!';
    if (hour < 18) return 'Good Afternoon!';
    return 'Good Evening!';
  };

  return (
    <div style={darkMode ? styles.darkTheme : styles.lightTheme}>
      <Router>
        {/* Navigation Bar */}
        <nav style={styles.navbar}>
        <div style={styles.leftNav}>
  <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
    <img
      src="https://cdn-icons-png.flaticon.com/128/7616/7616414.png"
      alt="Logo"
      style={styles.logoImage}
    />
    <div style={styles.logo}>Artistry</div>
  </Link>
</div>

          <ul style={styles.navLinks}>
            <li style={styles.navItem}>
              <Link to="/" style={styles.navLink}>Home</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/about" style={styles.navLink}>About</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/contact" style={styles.navLink}>Contact</Link>
            </li>
          </ul>
          <div style={styles.rightNav}>
            <input
              type="text"
              placeholder="Search..."
              style={styles.searchInput}
            />
            
          </div>
        </nav>

        {/* Greeting */}
        <div style={styles.greeting}>{greeting()}</div>

        {/* Content Routes */}
        <div style={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer style={styles.footer}>
          <div>© 2024 MyWebsite. All rights reserved.</div>
          <div style={styles.socialIcons}>
            <a href="#" style={styles.iconLink}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/1384/1384063.png"
                alt="Facebook"
                style={styles.icon}
              />
            </a>
            <a href="#" style={styles.iconLink}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png"
                alt="Twitter"
                style={styles.icon}
              />
            </a>
            <a href="#" style={styles.iconLink}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/1384/1384065.png"
                alt="Instagram"
                style={styles.icon}
              />
            </a>
          </div>
        </footer>
      </Router>
    </div>
  );
}

// Enhanced CSS-in-JS Styles
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: '0',
    color: 'white',
    height: '50px',
    width: '100%',
    boxSizing: 'border-box',
    position: 'fixed',
    top: 0,
    left: 0,
  },
  leftNav: { display: 'flex', alignItems: 'center' },
  logo: { fontSize: '1.2rem', fontWeight: 'bold', marginLeft: '8px' },
  logoImage: { height: '30px' },
  navLinks: { listStyle: 'none', display: 'flex', margin: 0, padding: 0 },
  navItem: { marginLeft: '5px' },
  navLink: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1rem',
    padding: '5px 10px',
    transition: 'background-color 0.3s',
    borderRadius: 'px',
  },
  navLinkHover: { backgroundColor: '#555' },
  searchInput: {
    padding: '4px',
    borderRadius: '4px',
    border: 'none',
    marginLeft: '650px',
  },
  themeButton: {
    padding: '3px 7px',
    borderRadius: '4px',
    backgroundColor: 'white',
    color: '#333',
    border: 'none',
    cursor: 'pointer',
    marginLeft: '20px',
  },
  content: {
    padding: '1rem',
    position: 'relative',
    zIndex: 1, // Ensures content appears above the background
  },
  greeting: { textAlign: 'center', fontSize: '1.5rem', margin: '20px 0' },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    width: '100%',
    left: 0,
    bottom: 0,
    boxSizing: 'border-box',
  },
  socialIcons: { display: 'flex', justifyContent: 'center', marginBottom: '0px' },
  iconLink: { margin: '10px' },
  icon: { width: '20px', height: '20px' },
  
  
};


export default App;
