import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header style={styles.header}>
      <Link to="/" style={{ ...styles.logo, textDecoration: 'none', color: 'white' }} onClick={closeMenu}>
        mshub
      </Link>

      <div className="hamburger" style={styles.hamburger} onClick={toggleMenu}>
        ☰
      </div>

      <nav style={{ ...styles.nav, transform: menuOpen ? 'translateY(0)' : 'translateY(-200%)' }}>
        <Link to="/crypto-extractor" style={styles.link} onClick={closeMenu}>Crypto Extractor</Link>
        <Link to="/time-converter" style={styles.link} onClick={closeMenu}>Time Converter</Link>
        <Link to="/macros" style={styles.link} onClick={closeMenu}>Macros</Link>
        <Link to="/files" style={styles.link} onClick={closeMenu}>Word & Excel Files</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 30px',
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    position: 'relative',
    zIndex: 1000,
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    zIndex: 1100,
  },
  nav: {
    position: 'absolute',
    top: '60px',
    right: '0px',
    backgroundColor: '#2c2c2c',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    textAlign: 'center',
    transition: 'transform 0.3s ease-in-out',
    zIndex: 999,
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '18px',
    padding: '15px 0',
    borderBottom: '1px solid #444',
  },
  hamburger: {
    fontSize: '30px',
    cursor: 'pointer',
    display: 'block',
    zIndex: 1100,
    outline: 'none',
  }
};

export default Header;
