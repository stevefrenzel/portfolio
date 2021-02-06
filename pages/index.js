// Next.js
import { useRouter } from 'next/router';
// next-seo
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
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
      <DefaultSeo
        {...SEO}
        title='Steve Frenzel - Web Developer'
        description='Web developer focused on frontend, accessibility and SEO.'
        openGraph={{ locale: router.locale }}
        canonical='https://www.stevefrenzel.dev/'
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
