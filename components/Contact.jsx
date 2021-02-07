import useTranslation from 'next-translate/useTranslation';

export default function Contact() {
  const { t } = useTranslation('common');
  const heading = t('headings.contact');
  const description = t('content.contact');
  const labelName = t('labels.name');
  const placeholderName = t('placeholders.name');
  const labelEmail = t('labels.email');
  const placeholderEmail = t('placeholders.email');
  const labelMessage = t('labels.message');
  const placeholderMessage = t('placeholders.message');
  const submitButton = t('submit-button');

  return (
    <section id='contact-container'>
      <div className='heading-container'>
        <h2 id='contact' tabIndex='-1'>
          {heading}
        </h2>
        {/* <a href='#contact' aria-label='Link to Contact heading'>
          #
        </a> */}
      </div>
      <p>{description}</p>
      <form
        name='contact'
        method='post'
        action='/success'
        data-netlify='true'
        netlify-honeypot='bot-field'
      >
        <label htmlFor='name'>{labelName}</label>
        <input
          className='contact-input'
          type='text'
          name='name'
          id='name'
          placeholder={placeholderName}
          required
        ></input>
        <label htmlFor='e-mail'>{labelEmail}</label>
        <input
          className='contact-input'
          type='email'
          name='e-mail'
          id='e-mail'
          placeholder={placeholderEmail}
          required
        ></input>
        <label htmlFor='message'>{labelMessage}</label>
        <textarea
          className='contact-input'
          id='message'
          name='message'
          rows='5'
          minLength='20'
          placeholder={placeholderMessage}
          required
          spellCheck
        ></textarea>
        <button type='submit'>{submitButton}</button>
      </form>
    </section>
  );
}
