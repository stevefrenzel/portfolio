// Next.js
import Link from 'next/link';
import Image from 'next/image';
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

      <div className='gallery'>
        <Link href='/work/auf-ewig-winter'>
          <a>
            <Image
              src='/img/winter.jpg'
              alt='AUF EWIG WINTER website'
              width='400'
              height='400'
            />
          </a>
        </Link>
        <Link href='/work/portfolio-website'>
          <a>
            <div className='image-wrapper'></div>
            <Image
              src='/img/portfolio.jpg'
              alt='Portfolio website'
              width='400'
              height='400'
            />
          </a>
        </Link>
        <Link href='/work/personal-blog'>
          <a>
            <div className='image-wrapper'></div>
            <Image
              src='/img/blog.jpg'
              alt='Personal blog'
              width='400'
              height='400'
            />
          </a>
        </Link>
      </div>
    </section>
  );
}
