import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
    <header>
      <nav role='banner'>
        <Link href='/'>
          <a>🏚 Home</a>
        </Link>
        {router.locales.map((language) => (
          <Link
            href={router.asPath}
            locale={language}
            scroll={false}
            key={language}
          >
            <a>
              {language === 'en'
                ? '🇺🇸 ENGLISH'
                : language === 'de'
                ? '🇩🇪 DEUTSCH'
                : null}
            </a>
          </Link>
        ))}
      </nav>
    </header>
  );
}
