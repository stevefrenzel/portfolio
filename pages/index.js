// Next.js
import { useRouter } from 'next/router';
// next-seo
import { NextSeo } from 'next-seo';

// Components
import Header from '@components/Header';
import Intro from '@components/Intro';
import Work from '@components/Work';
import About from '@components/About';
import Contact from '@components/Contact';
import Footer from '@components/Footer';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <NextSeo
        title='Steve Frenzel - Web Developer'
        description='Web developer focused on frontend, accessibility, SEO and performance'
        canonical='https://stevefrenzel.dev/'
        openGraph={{
          url: router.asPath,
          type: 'website',
          title: 'Steve Frenzel - Web Developer',
          description:
            'Web developer focused on frontend, accessibility, SEO and performance',
          locale: router.locale,
          site_name: 'stevefrenzel.dev',
          images: [
            {
              url: 'https://stevefrenzel.dev/img/open-graph-min.jpg',
              width: 1200,
              height: 630,
              alt: 'Steve Frenzel - Web Developer',
            },
            {
              url: 'https://stevefrenzel.dev/img/twitter-min.jpg',
              width: 1024,
              height: 512,
              alt: 'Steve Frenzel - Web Developer',
            },
          ],
        }}
        twitter={{
          site: '@stvfrnzl',
          handle: '@stvfrnzl',
          cardType: 'summary_large_image',
        }}
      />
      <a href='#main'>Skip to main content</a>
      <Header />
      <Intro />
      <main id='main' tabIndex='-1'>
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
