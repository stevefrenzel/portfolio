// TODO Replace bulletpoints with respective brand icon

export const config = {
  unstable_runtimeJS: false,
};

import styles from '../styles/About.module.css';

export default function About() {
  return (
    <section className={styles.container}>
      <h2>About</h2>
      <p>
        However, I was not always a web developer. I also have over 10 years
        experience in the music business as a sound engineer, producer and
        stagehand. During this time I met many different people and learned to
        respond to their individual needs.{' '}
      </p>
      <p>
        I constantly educate myself to be able to decide which technology will
        best fit your project. The result will be an intuitive, performant and
        easily accessible product, taking current development best practices
        into account. These are some of the technologies I am familiar with:
      </p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Vue.js</li>
        <li>Figma</li>
      </ul>
    </section>
  );
}
