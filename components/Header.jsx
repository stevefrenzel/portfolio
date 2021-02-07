// TODO Add theme switch

import React, { useState, useEffect } from 'react';
// Next.js
import Link from 'next/link';
import { useRouter } from 'next/router';
// i18n
import useTranslation from 'next-translate/useTranslation';
// Helpers
import { debounce } from '../helpers';

export default function Header() {
  const router = useRouter();
  // Hide on scroll
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );
    setPrevScrollPos(currentScrollPos);
  }, 100);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);
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
    <header style={{ top: visible ? '0' : '-3rem' }}>
      <nav role='banner' id='navbar'>
        <Link href='/' scroll={false}>
          <a>✌️ Steve Frenzel</a>
        </Link>

        <div className='flex-item'></div>

        <label
          htmlFor='language-select'
          className='visually-hidden'
          aria-labelledby='language-select'
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
