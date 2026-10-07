import React from 'react';
import styles from './Hero.module.css';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.splitBackground}></div>
      <ScrollReveal delay={100} direction="up">
        <div className={styles.content}>
          <h1 className={styles.title}>Precision in Every Number</h1>
          <p className={styles.subtitle}>Expert accounting, tax planning, and wealth management strategies tailored to fuel your growth.</p>
          <button className={styles.cta}>Schedule a Consultation</button>
        </div>
      </ScrollReveal>
    </section>
  );
}
