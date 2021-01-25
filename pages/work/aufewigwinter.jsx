import Link from 'next/link';
import Head from 'next/head';

export default function AufEwigWinter() {
  return (
    <>
      <Head>
        <title>Steve Frenzel - Web Developer | AUF EWIG WINTER</title>
      </Head>
      <Link href='/'>
        <a>GO TO START 👈</a>
      </Link>
      <main id='project-container'>
        {/* <img
          src='../img/winter.jpg'
          alt='AUF EWIG WINTER website'
          width='400'
          height='400'
          loading='lazy'
        /> */}
        <img
          src='https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
          alt='A good boy'
          loading='lazy'
        />
        <div className='heading-container'>
          <h1 id='project-name' tabIndex='-1'>
            AUF EWIG WINTER
          </h1>
          <a href='#project-name' aria-label='Link to Project Name heading'>
            #
          </a>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className='heading-container'>
          <h2 id='purpose-and-goal' tabIndex='-1'>
            Purpose &amp; goal
          </h2>
          <a
            href='#purpose-and-goal'
            aria-label='Link to Purpose and Goal heading'
          >
            #
          </a>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className='heading-container'>
          <h2 id='tech-stack' tabIndex='-1'>
            Tech stack
          </h2>
          <a href='#tech-stack' aria-label='Link to Tech stack heading'>
            #
          </a>
        </div>
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
          src='https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
          alt='A good boy'
          loading='lazy'
        />
        <div className='heading-container'>
          <h2 id='thought-process' tabIndex='-1'>
            Thought process
          </h2>
          <a
            href='#thought-process'
            aria-label='Link to Thought process heading'
          >
            #
          </a>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className='heading-container'>
          <h2 id='lessons-learned' tabIndex='-1'>
            Lessons learned
          </h2>
          <a
            href='#lessons-learned'
            aria-label='Link to Lessons learned heading'
          >
            #
          </a>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className='heading-container'>
          <h3 id='other-projects' tabIndex='-1'>
            Other projects
          </h3>
          <a href='#other-projects' aria-label='Link to Other projects heading'>
            #
          </a>
        </div>
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
        <Link href='/work/portfolio-website'>
          <a>
            <figure>
              <img
                src='../img/portfolio.jpg'
                alt='Portfolio website'
                width='200'
                height='200'
                loading='lazy'
              />
              <figcaption>Portfolio website</figcaption>
            </figure>
          </a>
        </Link>
      </main>
    </>
  );
}
