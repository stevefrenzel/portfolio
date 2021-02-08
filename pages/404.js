// Next.js
import Link from 'next/link';
// i18n
import useTranslation from 'next-translate/useTranslation';

export default function FourOhFour() {
  const { t } = useTranslation('common');
  const title = t('error.title');
  const description = t('error.description');
  const link = t('error.link');

  return (
    <div className='error-wrapper'>
      <h1>404 - {title}</h1>
      <p>
        {description}
        <span role='figure' aria-label='shoulder shrug emoji'>
          ¯\_(ツ)_/¯
        </span>
      </p>
      <Link href='/'>
        <a>{link}</a>
      </Link>
    </div>
  );
}
