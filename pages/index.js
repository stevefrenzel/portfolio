// Next.js
import Head from 'next/head';
// Components
import Header from '@components/Header';
import Intro from '@components/Intro';
import Work from '@components/Work';
import About from '@components/About';
import Contact from '@components/Contact';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Steve Frenzel - Web Developer</title>
      </Head>
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
