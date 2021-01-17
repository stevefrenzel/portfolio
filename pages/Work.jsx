// TODO Loop through data file to show projects
// TODO Send respective props to selected component

import Link from 'next/link';
import styles from '../styles/Work.module.css';

export default function Work() {
  return (
    <section className={styles.container}>
      <h2>Work</h2>
      <p>
        These are some projects I’ve worked on. Click the image to see more
        details!
      </p>
      <Link href='/work/aufewigwinter'>
        <a>
          <figure>
            <img
              src='img/winter.jpg'
              alt='AUF EWIG WINTER website'
              width='200'
              height='200'
              loading='lazy'
            />
            <figcaption>AUF EWIG WINTER</figcaption>
          </figure>
        </a>
      </Link>
      <Link href='/work/portfolio-website'>
        <a>
          <figure>
            <img
              src='img/portfolio.jpg'
              alt='Portfolio website'
              width='200'
              height='200'
              loading='lazy'
            />
            <figcaption>Portfolio website</figcaption>
          </figure>
        </a>
      </Link>
      <Link href='/work/personal-blog'>
        <a>
          <figure>
            <img
              src='img/blog.jpg'
              alt='Personal blog'
              width='200'
              height='200'
              loading='lazy'
            />
            <figcaption>Personal blog</figcaption>
          </figure>
        </a>
      </Link>
    </section>
  );
}
