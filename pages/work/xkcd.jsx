// Next.js
import Head from 'next/head';
import Image from 'next/image';
// i18n
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
// Components
import Header from '@components/Header';

export default function Xkcd() {
  const Paragraph = (props) => <p {...props} />;
  const { t } = useTranslation('xkcd');
  // Headings
  const description = t('headings.description');
  const technologies = t('headings.technologies');
  const purposeAndGoal = t('headings.purpose-and-goal');
  const techStack = t('headings.tech-stack');
  const challengesAndProblems = t('headings.challenges-and-problems');
  const conclusion = t('headings.conclusion');
  // Paragraphs
  const p6 = t('tech-stack.p-6');
  const p7 = t('tech-stack.p-7');
  const p9 = t('challenges-and-problems.p-9');
  // Bulletpoints
  const bp1 = t('overview.bullet-points.bp-1');
  const bp2 = t('overview.bullet-points.bp-2');
  const bp3 = t('tech-stack.bullet-points.bp-3');
  const bp4 = t('tech-stack.bullet-points.bp-4');
  const bp5 = t('tech-stack.bullet-points.bp-5');
  const bp6 = t('tech-stack.bullet-points.bp-6');

  return (
    <>
      <Head>
        <title>Steve Frenzel - Web Developer | xkcd</title>
      </Head>
      <a href='#main'>Skip to main content</a>
      <Header />
      <div id='project-container'>
        <Image
          src='/img/xkcd-1.png'
          alt='Picture of xkcd design (desktop version)'
          width='1792'
          height='1139'
          priority
        />
        <div className='heading-container'>
          <h1 id='project-name' tabIndex='-1'>
            xkcd
          </h1>
          <a href='#project-name' aria-label='Link to xkcd heading'>
            #
          </a>
        </div>
        <ul id='overview'>
          <li>{description}</li>
          <ul>
            <li>{bp1}</li>
          </ul>
          <li>{technologies}</li>
          <ul>
            <li>
              <a href='https://www.figma.com/' rel='noopener noreferrer'>
                Figma
              </a>
            </li>
          </ul>
          <li>Code</li>
          <ul>
            <li>{bp2}</li>
          </ul>
          <li>Live</li>
          <ul>
            <li>
              <a
                href='https://www.figma.com/proto/UbvyfUmiNk9mhn8Kzx2yw9/xkcd.com?node-id=48%3A7&viewport=692%2C1142%2C0.8818815350532532&scaling=scale-down'
                rel='noopener noreferrer'
              >
                Mobile version
              </a>
            </li>
            <li>
              <a
                href='https://www.figma.com/proto/UbvyfUmiNk9mhn8Kzx2yw9/xkcd.com?node-id=48%3A229&viewport=384%2C468%2C0.27478042244911194&scaling=min-zoom'
                rel='noopener noreferrer'
              >
                Tablet &amp; Desktop version
              </a>
            </li>
          </ul>
        </ul>
        <main id='main'>
          <Trans
            i18nKey='xkcd:overview.p-1'
            components={[
              <Paragraph />,
              <mark />,
              <a
                href='https://www.youtube.com/channel/UCeB_OpLspKJGiKv1CYkWFFw'
                rel='noopener noreferrer'
              />,
              <a
                href='https://www.youtube.com/watch?v=FTFaQWZBqQ8'
                rel='noopener noreferrer'
              />,
              <mark />,
              <a href='https://xkcd.com/' rel='noopener noreferrer' />,
              <mark />,
              <a href='https://what-if.xkcd.com/' rel='noopener noreferrer' />,
              <a href='https://xkcd.com/how-to/' rel='noopener noreferrer' />,
            ]}
          />
          <div className='heading-container'>
            <h2 id='purpose-and-goal' tabIndex='-1'>
              {purposeAndGoal}
            </h2>
            <a
              href='#purpose-and-goal'
              aria-label='Link to Purpose and Goal heading'
            >
              #
            </a>
          </div>
          <Trans
            i18nKey='xkcd:purpose-and-goal.p-2'
            components={[<Paragraph />, <mark />]}
          />
          <Trans
            i18nKey='xkcd:purpose-and-goal.p-3'
            components={[<Paragraph />, <mark />, <mark />]}
          />
          <Trans
            i18nKey='xkcd:purpose-and-goal.p-4'
            components={[<Paragraph />, <mark />, <mark />]}
          />
          <div className='heading-container'>
            <h2 id='tech-stack' tabIndex='-1'>
              {techStack}
            </h2>
            <a href='#tech-stack' aria-label='Link to Tech stack heading'>
              #
            </a>
          </div>
          <Trans
            i18nKey='xkcd:tech-stack.p-5'
            components={[<Paragraph />, <mark />]}
          />
          <ul>
            <li>{bp3}</li>
            <li>{bp4}</li>
            <li>{bp5}</li>
            <li>{bp6}</li>
          </ul>
          <p>{p6}</p>
          <p>{p7}</p>
          <Image
            src='/img/xkcd-2.png'
            alt='Picture of xkcd design (mobile version)'
            width='1792'
            height='1139'
            priority
          />
          <div className='heading-container'>
            <h2 id='challenges-and-problems' tabIndex='-1'>
              {challengesAndProblems}
            </h2>
            <a
              href='#challenges-and-problems'
              aria-label='Link to Challenges &amp; Problems heading'
            >
              #
            </a>
          </div>
          <Trans
            i18nKey='xkcd:challenges-and-problems.p-8'
            components={[<Paragraph />, <mark />]}
          />
          <p>{p9}</p>
          <div className='heading-container'>
            <h2 id='conclusion' tabIndex='-1'>
              {conclusion}
            </h2>
            <a href='#conclusion' aria-label='Link to Conclusion heading'>
              #
            </a>
          </div>
          <Trans
            i18nKey='xkcd:conclusion.p-10'
            components={[<Paragraph />, <mark />]}
          />
        </main>
      </div>
    </>
  );
}
