// TODO Add theme switch

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
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
          <a>✌️ Steve Frenzel</a>
        </Link>

        <div className='flex-item'></div>

        <select name='languages' id='language-select' onChange={onSelectChange}>
          {router.locales.map((language) => (
            <option value={language} key={language}>
              {language === 'en' ? 'EN 🇺🇸' : language === 'de' ? 'DE 🇩🇪' : null}
            </option>
          ))}
        </select>
      </nav>
    </header>
  );
}
