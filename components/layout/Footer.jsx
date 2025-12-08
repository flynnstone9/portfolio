import { CONTACT } from '@/data/constants';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.links}>
          <div className={styles.linkItem}>
            <svg className={styles.icon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 11L11 5M11 5H5M11 5V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <a href={`mailto:${CONTACT.email}`}>Email</a>
          </div>
          <div className={styles.linkItem}>
            <svg className={styles.icon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 11L11 5M11 5H5M11 5V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className={styles.linkItem}>
            <svg className={styles.icon} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 11L11 5M11 5H5M11 5V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <a href="/CFlynn-Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
