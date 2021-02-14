// CSS
import '@styles/globals.scss';
import '@styles/reset.css';
// Next.js
import Head from 'next/head';
// Sass
import '@styles/header.scss';
import '@styles/intro.scss';
import '@styles/work.scss';
import '@styles/project.scss';
import '@styles/about.scss';
import '@styles/contact.scss';
import '@styles/footer.scss';
import '@styles/error.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicons/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicons/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicons/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicons/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <link rel='shortcut icon' href='/favicons/favicon.ico' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta
          name='msapplication-config'
          content='/favicons/browserconfig.xml'
        />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
