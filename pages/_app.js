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
        <link rel='canonical' href='https://stevefrenzel.dev/' />
        <title>Steve Frenzel - Web Developer</title>
        <meta name='robots' content='follow, index' />
        <meta
          name='description'
          content='Web developer focused on frontend, accessibility, SEO and performance'
        />
        {/* Open Graph */}
        <meta property='og:url' content='https://stevefrenzel.dev/' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Steve Frenzel' />
        <meta
          property='og:description'
          content='Web developer focused on frontend, accessibility, SEO and performance'
        />
        <meta property='og:title' content='Steve Frenzel - Web Developer' />
        <meta
          property='og:image'
          content='https://stevefrenzel.dev/img/seo-banner.png'
        />
        <meta property='og:image:width' content='1600' />
        <meta property='og:image:height' content='882' />
        <meta
          property='og:image:alt'
          content='Picture of web developer Steve Frenzel'
        />
        <meta property='og:image:type' content='image/png' />
        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@stvfrnzl' />
        <meta name='twitter:title' content='Steve Frenzel - Web Developer' />
        <meta
          name='twitter:description'
          content='Web developer focused on frontend, accessibility, SEO and performance'
        />
        <meta
          name='twitter:image'
          content='https://stevefrenzel.dev/img/seo-banner.png'
        />
        <meta
          name='twitter:image:alt'
          content='Picture of web developer Steve Frenzel'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
