export const config = {
  unstable_runtimeJS: false,
};

export default function Contact() {
  return (
    <section id='contact-container'>
      <div className='heading-container'>
        <h2 id='contact' tabIndex='-1'>
          Contact
        </h2>
        <a href='#contact' aria-label='Link to Contact heading'>
          #
        </a>
      </div>
      <p>If you’re interested in working with me, I’d love to hear from you!</p>
      <form
        name='contact'
        method='post'
        action='/success'
        data-netlify='true'
        netlify-honeypot='bot-field'
      >
        <label htmlFor='name'>Name (required)</label>
        <input
          className='contact-input'
          type='text'
          name='name'
          id='name'
          placeholder='Enter your name'
          required
        ></input>
        <label htmlFor='e-mail'>E-Mail (required)</label>
        <input
          className='contact-input'
          type='email'
          name='e-mail'
          id='e-mail'
          placeholder='Enter your E-Mail'
          required
        ></input>
        <label htmlFor='message'>Message (min. 20 characters)</label>
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
