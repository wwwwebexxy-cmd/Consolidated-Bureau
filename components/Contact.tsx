import React from 'react';
import styles from './Contact.module.css';
import ScrollReveal from './ScrollReveal';

const PhoneIcon = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <ScrollReveal>
          <h2 className={styles.heading}>Contact</h2>
        </ScrollReveal>
        
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <ScrollReveal delay={100} direction="right">
              <div className={styles.card}>
                <div className={styles.iconWrapper}><PhoneIcon /></div>
                <span className={styles.text}>+91 000 000 0000</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200} direction="right">
              <div className={styles.card}>
                <div className={styles.iconWrapper}><WhatsAppIcon /></div>
                <span className={styles.text}>whats number</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={300} direction="right">
              <div className={styles.card}>
                <div className={styles.iconWrapper}><ClockIcon /></div>
                <span className={styles.text}>Mon-Fri: 9am - 6pm</span>
              </div>
            </ScrollReveal>
          </div>
          
          <div className={styles.rightColumn}>
            <ScrollReveal delay={200} direction="left">
              <div className={styles.mapPlaceholder}>
                {/* This would be an iframe or an actual map integration */}
                <span>Apex Financial HQ Location</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
