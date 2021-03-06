// CSS
import '@styles/globals.scss';
import '@styles/reset.css';
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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
