import Image from 'next/image';

export default function Welcome() {
  return (
    <section id='welcome'>
      <div className='left-container perfect-center'>
        <Image
          src='/images/steve-frenzel.jpg'
          width='400'
          height='400'
          alt='Steve Frenzel'
        ></Image>
      </div>

      <div className='right-container perfect-center'>
        <h1>
          Steve Frenzel - <br />
          Web Developer
        </h1>
        <p>I build things for the web.</p>
      </div>
    </section>
  );
}
