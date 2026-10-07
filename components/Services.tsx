import React from 'react';
import styles from './Services.module.css';
import ScrollReveal from './ScrollReveal';

export default function Services() {
  return (
    <section id="service" className={styles.services}>
      <div className={styles.container}>
        <ScrollReveal delay={100}>
          <h2 className={styles.heading}>Our Services</h2>
        </ScrollReveal>
        
        <div className={styles.grid}>
          <div className={`${styles.card} ${styles.topLeft}`}>
            <ScrollReveal delay={200}>
              <h3>Tax Strategy & Preparation</h3>
              <p>Comprehensive tax planning and compliance for individuals and corporations, minimizing liability and maximizing retention.</p>
            </ScrollReveal>
          </div>
          <div className={`${styles.card} ${styles.bottomLeft}`}>
            <ScrollReveal delay={300}>
              <h3>Corporate Auditing</h3>
              <p>Thorough financial audits, risk assessments, and compliance reviews to ensure absolute transparency.</p>
            </ScrollReveal>
          </div>
          <div className={`${styles.card} ${styles.rightBlock}`}>
            <ScrollReveal delay={400} direction="left">
              <h3>Wealth Management</h3>
              <p>
                Long-term financial planning, asset protection, and investment strategies designed to secure your future.
              </p>
              <div className={styles.visualPlaceholder}></div>
            </ScrollReveal>
          </div>
        </div>
      </div>
      <div className={styles.geometricStrip}></div>
    </section>
  );
}
