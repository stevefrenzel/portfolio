export const config = {
  unstable_runtimeJS: false,
};

import styles from '../styles/Intro.module.css';

export default function Intro() {
  return (
    <section className={styles.container}>
      <h1>Steve Frenzel - Web Developer</h1>
      <p>
        I am a{' '}
        <a href='https://www.spiced-academy.com/' rel='noopener noreferrer'>
          Spiced Academy
        </a>{' '}
        graduate and currently work for{' '}
        <a href='https://www.nexum.de/' rel='noopener noreferrer'>
          nexum AG
        </a>
        , where I have been involved on projects for{' '}
        <a href='https://www.svti.ch/' rel='noopener noreferrer'>
          SVTI
        </a>
        ,{' '}
        <a href='https://www.mobiliar.ch/' rel='noopener noreferrer'>
          die mobiliar
        </a>{' '}
        and{' '}
        <a href='https://niessing.com/' rel='noopener noreferrer'>
          Niessing
        </a>
        , among others. I enjoy creating easily accessible and usable websites
        and apps.
      </p>
    </section>
  );
}
