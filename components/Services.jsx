export default function Services() {
  return (
    <section id='services'>
      <h2>Services</h2>

      <div className='services-container perfect-center'>
        <img
          src='/illustrations/interview.svg'
          alt='People shaking hands accross the table'
        />
        <div className='content odd'>
          <h3>1. First meeting and planning</h3>
          <p>
            Meeting in person or via video call to{' '}
            <mark>get to know each other</mark> and discuss the scope and cost
            of the project. (Free of charge)
          </p>
        </div>
      </div>

      <div className='services-container perfect-center'>
        <img
          src='/illustrations/click-here.svg'
          alt='Person pointing at design form'
        />
        <div className='content even'>
          <h3>2. Creating a draft</h3>
          <p>
            Developing an <mark>interactive design of the project</mark>. I'll
            provide either a draft made with{' '}
            <a href='https://www.sketch.com/' rel='noopener noreferrer'>
              Sketch
            </a>{' '}
            or a unique, private link hosted on{' '}
            <a href='https://www.netlify.com/' rel='noopener noreferrer'>
              Netlify
            </a>
            .
          </p>
        </div>
      </div>

      <div className='services-container perfect-center'>
        <img
          src='/illustrations/progressive-app.svg'
          alt='Laptop and a Smartphone'
        />
        <div className='content odd'>
          <h3>3. Building the project</h3>
          <p>
            Developing your website (or app) with{' '}
            <mark>Accessibility, Best Practices, Performance and SEO</mark> in
            mind. To measure these values, I use{' '}
            <a href='https://web.dev/measure/' rel='noopener noreferrer'>
              Google Lighthouse
            </a>
            , among other tools.
          </p>
        </div>
      </div>

      <div className='services-container perfect-center'>
        <img
          src='/illustrations/dev-productivity.svg'
          alt='Person working on a laptop'
        />
        <div className='content even'>
          <h3>4. Maintenance</h3>
          <p>
            If desired, I can <mark>maintain the project</mark> for a monthly or
            yearly fee. Prices depend on the size of it and duration of support.
          </p>
        </div>
      </div>
    </section>
  );
}
