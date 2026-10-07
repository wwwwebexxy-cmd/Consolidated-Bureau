import React from 'react';
import styles from './WhyChooseUs.module.css';
import ScrollReveal from './ScrollReveal';

export default function WhyChooseUs() {
  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.container}>
        <ScrollReveal>
          <h2 className={styles.heading}>Why choose Us</h2>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div className={styles.funnelWrapper}>
            <div className={styles.funnel}>
              <div className={`${styles.tier} ${styles.tier1}`}>
                <span>Accuracy</span>
              </div>
              <div className={`${styles.tier} ${styles.tier2}`}>
                <span>Integrity</span>
              </div>
              <div className={`${styles.tier} ${styles.tier3}`}>
                <span>Strategic Insight</span>
              </div>
              <div className={`${styles.tier} ${styles.tier4}`}>
                <span>Compliance</span>
              </div>
              <div className={`${styles.tier} ${styles.tier5}`}>
                <span>Financial Growth</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
