export const config = {
  unstable_runtimeJS: false,
};

import styles from '../styles/Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.container}>
      <h2>Contact</h2>
      <p>
        If your’re interested in working with me, I’d love to hear from you!
      </p>
      <form
        name='contact'
        method='post'
        action='/success'
        data-netlify='true'
        netlify-honeypot='bot-field'
      >
        <label htmlFor='name'>Name</label>
        <input
          className='contact-input'
          type='text'
          name='name'
          id='name'
          placeholder='Enter your name'
          required
        ></input>
        <label htmlFor='e-mail'>E-Mail</label>
        <input
          className='contact-input'
          type='email'
          name='e-mail'
          id='e-mail'
          placeholder='Enter your E-Mail'
          required
        ></input>
        <label htmlFor='message'>Message</label>
        <textarea
          className='contact-input'
          id='message'
          name='message'
          rows='5'
          minLength='20'
          placeholder='Enter your message'
          required
          spellCheck
        ></textarea>
        <button type='submit'>Send</button>
      </form>
    </section>
  );
}
