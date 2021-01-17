// TODO Loop through data set for social links
// TODO Date needs to be dynamic

import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <ul>
        <li>
          <a href='mailto:stevefrenzel@gmx.de'>E-Mail</a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/stevefrenzel/'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href='https://twitter.com/stvfrnzl' rel='noopener noreferrer'>
            Twitter
          </a>
        </li>
        <li>
          <a href='https://github.com/stevefrenzel' rel='noopener noreferrer'>
            GitHub
          </a>
        </li>
      </ul>
      <span>&copy; 2021 Steve Frenzel</span>
    </footer>
  );
}
