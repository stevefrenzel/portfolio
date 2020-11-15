export default function Contact() {
  return (
    <section id='contact'>
      <div className='wrapper'>
        <h2>Contact</h2>
        <p>
          <a href='mailto:stevefrenzel@gmx.de?subject=Enquiry about website or app'>
            Click here to send me an e-mail{' '}
          </a>
          or fill out the form below:
        </p>
        <form
          name='contact'
          method='post'
          action='/success'
          data-netlify='true'
          netlify-honeypot='bot-field'
        >
          <fieldset>
            {/* For Netlify: */}
            <input type='hidden' name='form-name' value='contact' />
            <label htmlFor='first-name'>First name:</label>
            <input
              className='contact-input'
              type='text'
              name='first-name'
              id='first-name'
              placeholder='First name'
              required
            ></input>
            <label htmlFor='last-name'>Last name:</label>
            <input
              className='contact-input'
              type='text'
              name='last-name'
              id='last-name'
              placeholder='Last name'
              required
            ></input>
            <label htmlFor='e-mail'>E-Mail:</label>
            <input
              className='contact-input'
              type='email'
              name='e-mail'
              id='e-mail'
              placeholder='E-Mail'
              required
            ></input>
            <label htmlFor='enquiry'>Enquiry:</label>
            <textarea
              className='contact-input'
              id='enquiry'
              name='enquiry'
              rows='5'
              minLength='30'
              placeholder='Enquiry'
              required
              spellCheck
            ></textarea>
            <button type='submit'>Submit</button>
          </fieldset>
        </form>
      </div>

      <img
        src='/illustrations/inbox-cleanup.svg'
        alt='Ticked off letter inside envelope'
      />
    </section>
  );
}
