import styles from './welcome.module.css';

export default function Welcome() {
  return (
    <section id='welcome' className={styles.container}>
      <h1>Steve Frenzel - Web Developer</h1>
      <p>I build things for the web.</p>
    </section>
  );
}
