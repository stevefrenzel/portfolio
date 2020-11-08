import Head from 'next/head';

import Navigation from '../components/Navigation';
import Welcome from '../components/Welcome';
import About from '../components/About';
import Services from '../components/Services';
import References from '../components/References';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Steve Frenzel - Web Developer</title>
      </Head>
      <Navigation />
      <Welcome />
      <About />
      <Services />
      <References />
      <Contact />
      <Footer />
    </>
  );
}
