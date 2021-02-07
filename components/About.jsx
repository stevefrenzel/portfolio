import useTranslation from 'next-translate/useTranslation';

export default function About() {
  const { t } = useTranslation('common');
  const heading = t('headings.about');
  const p1 = t('content.about.p-1');
  const p2 = t('content.about.p-2');
  const p3 = t('content.about.p-3');

  return (
    <section id='about-container'>
      <div className='heading-container'>
        <h2 id='about' tabIndex='-1'>
          {heading}
        </h2>
        <a href='#about' aria-label='Link to About heading'>
          <span role='img' aria-label='link symbol'>
            🔗
          </span>
        </a>
      </div>
      <p>{p1}</p>
      <p>{p2}</p>
      <ul>
        <li id='html-icon'>HTML</li>
        <li id='css-icon'>CSS</li>
        <li id='javascript-icon'>JavaScript</li>
        <li id='react-icon'>React</li>
        <li id='vue-icon'>Vue.js</li>
        <li id='figma-icon'>Figma</li>
      </ul>
      <p>{p3}</p>
      <ul>
        <li id='chrome-icon'>Google Chrome</li>
        <li id='firefox-icon'>Firefox</li>
        <li id='safari-icon'>Safari</li>
        <li id='edge-icon'>Microsoft Edge</li>
      </ul>
    </section>
  );
}
