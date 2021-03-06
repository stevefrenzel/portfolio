// Next.js
import Image from 'next/image';
// i18n
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';

export default function Intro() {
  const { t } = useTranslation('common');
  const jobTitle = t('headings.intro');
  const disclaimer = t('content.disclaimer');
  const bp1 = t('bullet-points.bp-1');
  const bp2 = t('bullet-points.bp-2');
  const Component = (props) => <p {...props} />;
  return (
    <section id='intro-wrapper'>
      <div className='image-and-text'>
        <div className='image-wrapper'>
          <Image
            src='/img/steve-light.jpg'
            alt='Picture of Steve Frenzel'
            width='400'
            height='400'
            priority
          />
        </div>
        <div className='heading-wrapper'>
          <h1>Steve Frenzel</h1>
          <h2>
            <span className='visually-hidden'>Subtitle:</span>
            {jobTitle}
          </h2>
        </div>
      </div>

      <Trans
        i18nKey='common:content.intro'
        components={[
          <Component />,
          <a
            href='https://www.spiced-academy.com/'
            rel='noopener noreferrer'
          />,
          <a href='https://www.nexum.de/' rel='noopener noreferrer' />,
          <a href='https://www.svti.ch/' rel='noopener noreferrer' />,
          <a href='https://niessing.com/' rel='noopener noreferrer' />,
        ]}
      />

      <article>
        <p>⚠️ {disclaimer}</p>
        <ul>
          <li>Theme Switch</li>
          <li>{bp1}</li>
          <li>{bp2}</li>
        </ul>
      </article>
    </section>
  );
}
