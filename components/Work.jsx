// Next.js
import Link from 'next/link';
// i18n
import useTranslation from 'next-translate/useTranslation';

export default function Work() {
  const { t } = useTranslation('common');
  const heading = t('headings.work');
  const description = t('content.work');

  return (
    <section id='work-wrapper'>
      <div className='heading-container'>
        <h2 id='work' tabIndex='-1'>
          {heading}
        </h2>
        <a href='#work' aria-label='Link to Work heading'>
          #
        </a>
      </div>
      <p>{description}</p>
      <ul>
        <li>
          <Link href='/work/auf-ewig-winter' scroll={false}>
            <a>AUF EWIG WINTER</a>
          </Link>
        </li>
        <li>
          <Link href='/work/xkcd' scroll={false}>
            <a>xkcd </a>
          </Link>
        </li>
        {/* <li>
          <Link href='/work/portfolio-website' scroll={false}>
            <a>Portfolio website</a>
          </Link>
        </li> */}
      </ul>
    </section>
  );
}
