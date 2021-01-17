// TODO Make this a reusable component
// TODO Loop through data file for remaining projects but ignore current one

import Link from 'next/link';
import Head from 'next/head';
import styles from '../../styles/Project.module.css';

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Steve Frenzel - Web Developer | Portfolio website</title>
      </Head>
      <Link href='/'>
        <a>GO TO START 👈</a>
      </Link>
      <main className={styles.container}>
        <img
          src='../img/portfolio.jpg'
          alt='A dog'
          width='400'
          height='400'
          loading='lazy'
        />
        <h1>Portfolio website</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <h2>Purpose &amp; goal</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h2>Tech stack</h2>
        <ul>
          <li>React</li>
          <li>styled-components</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img
          src='../img/coding.jpg'
          alt='Laptop on a desk'
          width='400'
          height='400'
          loading='lazy'
        />
        <h2>Thought process</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h2>Lessons learned</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h3>Other projects:</h3>
        <Link href='/work/aufewigwinter'>
          <a>
            <figure>
              <img
                src='../img/winter.jpg'
                alt='AUF EWIG WINTER website'
                width='200'
                height='200'
                loading='lazy'
              />
              <figcaption>AUF EWIG WINTER</figcaption>
            </figure>
          </a>
        </Link>
        <Link href='/work/personal-blog'>
          <a>
            <figure>
              <img
                src='../img/blog.jpg'
                alt='Personal blog'
                width='200'
                height='200'
                loading='lazy'
              />
              <figcaption>Personal blog</figcaption>
            </figure>
          </a>
        </Link>
      </main>
    </>
  );
}
