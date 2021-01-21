export const config = {
  unstable_runtimeJS: false,
};

export default function Intro() {
  return (
    <section id='intro-container'>
      <img
        src='/img/steve-light.jpg'
        alt='Picture of Steve Frenzel'
        width='400'
        height='400'
        loading='lazy'
      />
      <div className='text-container'>
        <h1>Steve Frenzel</h1>
        <h2>
          <span className='visually-hidden'>Subtitle:</span>Web Developer
        </h2>
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
      </div>
    </section>
  );
}
