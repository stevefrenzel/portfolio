// Next.js
import Image from 'next/image';
import { useRouter } from 'next/router';
// next-seo
import { NextSeo } from 'next-seo';
// i18n
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
// Components
import Header from '@components/Header';

export default function AufEwigWinter() {
  const router = useRouter();
  const Paragraph = (props) => <p {...props} />;
  const BulletPoint = (props) => <li {...props} />;
  const { t } = useTranslation('aew');
  // Headings
  const description = t('headings.description');
  const technologies = t('headings.technologies');
  const purposeAndGoal = t('headings.purpose-and-goal');
  const techStack = t('headings.tech-stack');
  const challengesAndProblems = t('headings.challenges-and-problems');
  const conclusion = t('headings.conclusion');
  // Paragraphs
  const p7 = t('challenges-and-problems.p-7');
  // Bulletpoints
  const bp2 = t('conclusion.bullet-points.bp-2');
  const bp3 = t('conclusion.bullet-points.bp-3');
  const bp5 = t('conclusion.bullet-points.bp-5');
  const bp6 = t('conclusion.bullet-points.bp-6');
  // Misc
  const short = t('overview.short');

  return (
    <>
      <NextSeo
        title='Steve Frenzel - Web Developer | AUF EWIG WINTER'
        description='Website for german record label'
        canonical={router.asPath}
        openGraph={{
          url: router.asPath,
          type: 'website',
          title: 'Steve Frenzel - Web Developer | AUF EWIG WINTER',
          description: 'Website for german record label',
          locale: router.locale,
          site_name: 'stevefrenzel.dev',
        }}
        twitter={{ site: '@stvfrnzl', handle: '@stvfrnzl' }}
      />
      <a href='#main'>Skip to main content</a>
      <Header />
      <div id='project-container'>
        <Image
          src='/img/aew-1.png'
          alt='Picture of AUF EWIG WINTER website'
          width='1792'
          height='1139'
          priority
        />
        <div className='heading-container'>
          <h1 id='project-name' tabIndex='-1'>
            AUF EWIG WINTER
          </h1>
          <a href='#project-name' aria-label='Link to AUF EWIG WINTER heading'>
            <span role='img' aria-label='link symbol'>
              🔗
            </span>
          </a>
        </div>
        <ul id='overview'>
          <li>
            <strong>{description}</strong>
          </li>
          <ul>
            <li>{short}</li>
          </ul>
          <li>{technologies}</li>
          <ul>
            <li>
              <a href='https://www.figma.com/' rel='noopener noreferrer'>
                Figma
              </a>
            </li>
            <li>
              <a href='https://fontawesome.com/' rel='noopener noreferrer'>
                Font Awesome
              </a>
            </li>
            <li>
              <a href='https://www.netlify.com/' rel='noopener noreferrer'>
                Netlify
              </a>
            </li>
            <li>
              <a href='https://vuejs.org/' rel='noopener noreferrer'>
                Vue.js
              </a>
            </li>
          </ul>
          <li>Code</li>
          <ul>
            <li>
              <a
                href='https://github.com/stevefrenzel/auf-ewig-winter'
                rel='noopener noreferrer'
              >
                GitHub
              </a>
            </li>
          </ul>
          <li>Live</li>
          <ul>
            <li>
              <a href='https://www.aufewigwinter.de/' rel='noopener noreferrer'>
                AUF EWIG WINTER
              </a>
            </li>
          </ul>
        </ul>
        <main id='main'>
          <Trans
            i18nKey='aew:overview.p-1'
            components={[<Paragraph />, <mark />, <mark />]}
          />
          <div className='heading-container'>
            <h2 id='purpose-and-goal' tabIndex='-1'>
              {purposeAndGoal}
            </h2>
            <a
              href='#purpose-and-goal'
              aria-label='Link to Purpose and Goal heading'
            >
              <span role='img' aria-label='link symbol'>
                🔗
              </span>
            </a>
          </div>
          <Trans
            i18nKey='aew:purpose-and-goal.p-2'
            components={[<Paragraph />, <mark />]}
          />
          <div className='heading-container'>
            <h2 id='tech-stack' tabIndex='-1'>
              {techStack}
            </h2>
            <a href='#tech-stack' aria-label='Link to Tech stack heading'>
              <span role='img' aria-label='link symbol'>
                🔗
              </span>
            </a>
          </div>
          <ul className='icon-wrapper'>
            <li id='figma-icon'>Figma</li>
            <li id='fontawesome-icon'>Font Awesome</li>
            <li id='netlify-icon'>Netlify</li>
            <li id='vue-icon'>Vue.js</li>
          </ul>
          <Trans
            i18nKey='aew:tech-stack.p-3'
            components={[
              <Paragraph />,
              <mark />,
              <a
                href='https://developer.mozilla.org/en-US/docs/Glossary/Mobile_First'
                rel='noopener noreferrer'
              />,
            ]}
          />
          <Trans
            i18nKey='aew:tech-stack.p-4'
            components={[
              <Paragraph />,
              <mark />,
              <mark />,
              <mark />,
              <a
                href='https://en.wikipedia.org/wiki/Don%27t_repeat_yourself'
                rel='noopener noreferrer'
              />,
            ]}
          />
          <Image
            src='/img/aew-2.png'
            alt='Picture of AUF EWIG WINTER website'
            width='1792'
            height='1139'
          />
          <div className='heading-container'>
            <h2 id='challenges-and-problems' tabIndex='-1'>
              {challengesAndProblems}
            </h2>
            <a
              href='#challenges-and-problems'
              aria-label='Link to Challenges &amp; Problems heading'
            >
              <span role='img' aria-label='link symbol'>
                🔗
              </span>
            </a>
          </div>
          <Trans
            i18nKey='aew:challenges-and-problems.p-5'
            components={[
              <Paragraph />,
              <mark />,
              <mark />,
              <mark />,
              <mark />,
              <mark />,
            ]}
          />
          <Trans
            i18nKey='aew:challenges-and-problems.p-6'
            components={[
              <Paragraph />,
              <a
                href='https://www.aufewigwinter.de/kora-winter'
                rel='noopener noreferrer'
              />,
              <mark />,
            ]}
          />
          <p>{p7}</p>
          <div className='heading-container'>
            <h2 id='conclusion' tabIndex='-1'>
              {conclusion}
            </h2>
            <a href='#conclusion' aria-label='Link to Conclusion heading'>
              <span role='img' aria-label='link symbol'>
                🔗
              </span>
            </a>
          </div>
          <Trans
            i18nKey='aew:conclusion.p-8'
            components={[<Paragraph />, <mark />, <mark />]}
          />
          <ul>
            <Trans
              i18nKey='aew:conclusion.bullet-points.bp-1'
              components={[<BulletPoint />, <mark />]}
            />
            <li>{bp2}</li>
            <li>{bp3}</li>
          </ul>
          <Trans
            i18nKey='aew:conclusion.p-9'
            components={[<Paragraph />, <mark />]}
          />
          <ul>
            <Trans
              i18nKey='aew:conclusion.bullet-points.bp-4'
              components={[<BulletPoint />, <mark />]}
            />
            <li>{bp5}</li>
            <li>{bp6}</li>
          </ul>
        </main>
      </div>
    </>
  );
}
