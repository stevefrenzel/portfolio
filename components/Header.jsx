import Link from 'next/link';
import { useRouter } from 'next/router';
// import { useTheme } from 'next-themes';

export default function Header() {
  const router = useRouter();
  // const { theme, setTheme } = useTheme();
  const onSelectChange = (e) => {
    const locale = e.target.value;
    router.push(router.asPath, router.asPath, {
      locale,
      scroll: false,
    });
  };

  return (
    <header>
      <nav role='banner' id='navbar'>
        <Link href='/' scroll={false}>
          <a>✌️ SF</a>
        </Link>

        <div className='flex-item'></div>

        {/* <button
          aria-label='Button to switch themes'
          type='button'
          onClick={
            theme === 'dark'
              ? () => setTheme('light')
              : theme === 'light'
              ? () => setTheme('dark')
              : null
          }
        >
          {theme === 'light' ? '🌞' : theme === 'dark' ? '🌚 ' : null}
        </button> */}

        <select name='languages' id='language-select' onChange={onSelectChange}>
          {router.locales.map((language) => (
            <option value={language} key={language}>
              {language === 'en' ? 'EN' : language === 'de' ? 'DE' : null}
            </option>
          ))}
        </select>
      </nav>
    </header>
  );
}
