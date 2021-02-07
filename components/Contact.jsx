import React, { useState } from 'react';
import axios from 'axios';
import useTranslation from 'next-translate/useTranslation';

export default function Contact() {
  // Formspree
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: '',
    name: '',
    message: '',
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: '',
        name: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xjvpzjvo',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(true, `${success}`);
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  // i18n
  const { t } = useTranslation('common');
  const heading = t('headings.contact');
  const description = t('content.contact');
  const labelName = t('labels.name');
  const placeholderName = t('placeholders.name');
  const labelEmail = t('labels.email');
  const placeholderEmail = t('placeholders.email');
  const labelMessage = t('labels.message');
  const placeholderMessage = t('placeholders.message');
  const submit = t('submit-button.submit');
  const submitted = t('submit-button.submitted');
  const submitting = t('submit-button.submitting');
  const success = t('submit-button.success');

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
      <form onSubmit={handleOnSubmit}>
        <label htmlFor='name'>{labelName}</label>
        <input
          id='name'
          type='text'
          name='name'
          className='contact-input'
          onChange={handleOnChange}
          value={inputs.name}
          placeholder={placeholderName}
          required
        ></input>
        <label htmlFor='email'>{labelEmail}</label>
        <input
          id='email'
          type='email'
          name='_replyto'
          className='contact-input'
          onChange={handleOnChange}
          value={inputs.email}
          placeholder={placeholderEmail}
          required
        ></input>
        <label htmlFor='message'>{labelMessage}</label>
        <textarea
          id='message'
          name='message'
          className='contact-input'
          onChange={handleOnChange}
          value={inputs.message}
          rows='5'
          minLength='20'
          placeholder={placeholderMessage}
          required
          spellCheck
        ></textarea>
        <button type='submit' disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? `${submit}`
              : `${submitted}`
            : `${submitting}`}
        </button>
      </form>
      {status.info.error && <p className='error'>Error: {status.info.msg}</p>}
      {!status.info.error && status.info.msg && (
        <p className='success'>{status.info.msg}</p>
      )}
    </section>
  );
}
