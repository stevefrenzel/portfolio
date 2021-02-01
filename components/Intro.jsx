// Next.js
import Image from 'next/image';
// i18n
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
// next-themes
import { useTheme } from 'next-themes';

export default function Intro() {
  const { t } = useTranslation('common');
  const jobTitle = t('headings.intro');
  const Component = (props) => <p {...props} />;
  const { theme } = useTheme();
  console.log(theme);
  return (
    <section id='intro-wrapper'>
      <div className='image-and-text'>
        <div className='image-wrapper'>
          {theme === 'light' ? (
            <Image
              src='/img/steve-light.jpg'
              alt='Picture of Steve Frenzel'
              width='400'
              height='400'
              priority
            />
          ) : theme === 'dark' ? (
            <Image
              src='/img/steve-dark.jpg'
              alt='Picture of Steve Frenzel'
              width='400'
              height='400'
              priority
            />
          ) : null}
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
          <a href='https://www.mobiliar.ch/' rel='noopener noreferrer' />,
          <a href='https://niessing.com/' rel='noopener noreferrer' />,
        ]}
      />
    </section>
  );
}
