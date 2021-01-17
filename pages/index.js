// Next.js
import Head from 'next/head';
// Components
import Intro from './Intro';
// import Nav from './Nav';
import Work from './Work';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Steve Frenzel - Web Developer</title>
      </Head>
      {/* <Nav /> */}
      <Intro />
      <Work />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
