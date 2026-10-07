import React from 'react';
import styles from './About.module.css';
import ScrollReveal from './ScrollReveal';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <ScrollReveal direction="right" delay={100}>
            <div className={styles.gallery}>
              <div className={`${styles.imagePlaceholder} ${styles.topImage}`}></div>
              <div className={`${styles.imagePlaceholder} ${styles.bottomImage}`}></div>
            </div>
          </ScrollReveal>
        </div>
        <div className={styles.rightColumn}>
          <ScrollReveal direction="left" delay={300}>
            <h2 className={styles.heading}>Our Firm</h2>
            <p className={styles.text}>
              Apex Financial is a trusted partner dedicated to helping businesses and individuals achieve absolute clarity in their finances. With decades of experience, we provide proactive solutions that protect and grow your assets.
            </p>
            <p className={styles.text}>
              Whether you need comprehensive tax planning, corporate auditing, or long-term wealth management, our team of seasoned CPAs and advisors are committed to your financial success and fiduciary responsibility.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
