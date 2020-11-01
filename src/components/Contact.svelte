<style>
  input,
  select,
  textarea {
    display: block;
  }
  textarea {
    resize: none;
  }
</style>

<section id="contact">
  <h2>Contact</h2>
  <p>
    <a href="mailto:stevefrenzel@gmx.de">Contact me via e-mail</a>
    or fill out the form below:
  </p>
  <form action="">
    <label for="first-name">First name:</label>
    <input
      type="text"
      name="first-name"
      id="first-name"
      placeholder="First name"
      required />
    <label for="last-name">Last name:</label>
    <input
      type="text"
      name="last-name"
      id="last-name"
      placeholder="Last name"
      required />
    <label for="company-name">Company name:</label>
    <input
      type="text"
      name="company-name"
      id="company-name"
      placeholder="Company name" />
    <label for="e-mail">E-Mail:</label>
    <input
      type="email"
      name="e-mail"
      id="e-mail"
      placeholder="E-Mail"
      required />
    <label for="enquiry">Enquiry:</label>
    <label for="select-service">Select a service:</label>
    <select name="services" id="select-service">
      <option value="generalEnquiry">General enquiry</option>
      <option value="website">Website</option>
      <option value="app">App</option>
      <option value="webVitalsCheck">Web Vitals Check</option>
    </select>
    <textarea
      id="enquiry"
      name="enquiry"
      placeholder="Enquiry"
      minlength="40"
      rows="5"
      spellcheck="true"
      required />
    <button type="submit">Send enquiry</button>
  </form>
</section>

<!-- TO DO: -->

<!-- Show minimum character count -->
<!-- Make form work -->
