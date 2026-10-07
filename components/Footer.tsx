import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          <div className={styles.column}>
            <h3 className={styles.logo}>Apex Financial</h3>
            <p className={styles.text}>
              Your trusted partner for comprehensive accounting, tax planning, and financial strategies.
            </p>
          </div>
          
          <div className={styles.column}>
            <h4 className={styles.heading}>Quick Links</h4>
            <ul className={styles.links}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Our Firm</a></li>
              <li><a href="#service">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h4 className={styles.heading}>Socials</h4>
            <ul className={styles.links}>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Dribbble</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} Apex Financial. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
