// TODO Add theme switch

import React from 'react';
// Next.js
import Link from 'next/link';
import { useRouter } from 'next/router';
// i18n
import useTranslation from 'next-translate/useTranslation';

export default function Header() {
  const router = useRouter();
  // i18n
  const { t } = useTranslation('common');
  const labelLanguage = t('select-language');
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

        <label
          htmlFor='language-select'
          className='visually-hidden'
          aria-labelledby={labelLanguage}
        >
          {labelLanguage}
        </label>
        <select name='languages' id='language-select' onChange={onSelectChange}>
          {router.locales.map((language) => (
            <option value={language} key={language} aria-label={language}>
              {language === 'en' ? 'EN 🇺🇸' : language === 'de' ? 'DE 🇩🇪' : null}
            </option>
          ))}
        </select>
      </nav>
    </header>
  );
}
