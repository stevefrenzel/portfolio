export const config = {
  unstable_runtimeJS: false,
};

export default function About() {
  return (
    <section id='about-container'>
      <div className='heading-container'>
        <h2 id='about' tabIndex='-1'>
          About
        </h2>
        <a href='#about' aria-label='Link to About heading'>
          #
        </a>
      </div>
      <p>
        I was not always a web developer, though. I also have over 10 years
        experience in the music industry as a sound engineer, producer and
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
        <li id='html-icon'>HTML</li>
        <li id='css-icon'>CSS</li>
        <li id='javascript-icon'>JavaScript</li>
        <li id='react-icon'>React</li>
        <li id='vue-icon'>Vue.js</li>
        <li id='figma-icon'>Figma</li>
      </ul>
      {/* <p>
        Outside of programming, I'm also very interested in music, hot sauces,
        dogs, and am always looking for delicious vegan cooking recipes (if you
        have any contact me)!
      </p> */}
    </section>
  );
}
