import useTranslation from 'next-translate/useTranslation';

export default function About() {
  const { t } = useTranslation('common');
  const heading = t('headings.about');
  const paragraphOne = t('content.about.p1');
  const paragraphTwo = t('content.about.p2');

  return (
    <section id='about-container'>
      <div className='heading-container'>
        <h2 id='about' tabIndex='-1'>
          {heading}
        </h2>
        <a href='#about' aria-label='Link to About heading'>
          #
        </a>
      </div>
      <p>{paragraphOne}</p>
      <p>{paragraphTwo}</p>
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
