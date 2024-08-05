"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    window.location.href = '/';
  };

  return (
    <>
      {/* Slim Navbar for Auth Buttons on Mobile */}
      <div className={styles.slimNavbar}>
        <div className={styles.authButtons}>
          {isAuthenticated ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <Link href="/Signup">
                <button>Sign Up</button>
              </Link>
              <Link href="/Login">
                <button>Login</button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Main Navbar */}
      <div className={styles.navbarContainer}>
        <div className={styles.rightContainer}>
          <Link href="/OurTechnology">
            <button className={styles.howItWorksButton}>How does it work?</button>
          </Link>
          <div className={styles.hamburgerContainer}>
            <div
              className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
              onClick={toggleMenu}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className={styles.logoContainer}>
          <Link href="/">
            <img src="/images/BetBrokersLogoBlack.png" alt="Logo" className={styles.logo} />
          </Link>
        </div>
        <nav className={`${styles.navbar} ${isOpen ? styles.active : ''}`}>
          <Link href="/" className={styles.navLink} onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/Dashboard" className={styles.navLink} onClick={toggleMenu}>
            Dashboard
          </Link>
          <Link href="/OurTechnology" className={styles.navLink} onClick={toggleMenu}>
            Our Technology
          </Link>
          <Link href="/About" className={styles.navLink} onClick={toggleMenu}>
            About
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
