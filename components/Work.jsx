// TODO Loop through data file to show projects
// TODO Send respective props to selected component

export const config = {
  unstable_runtimeJS: false,
};

import Link from 'next/link';

export default function Work() {
  return (
    <section id='work-container'>
      <h2>Work</h2>
      <p>
        Here you can find a selection of projects I have worked on recently.
        Click on the image to learn more!
      </p>

      <div className='gallery'>
        <Link href='/work/aufewigwinter'>
          <a>
            <img
              src='img/winter.jpg'
              alt='AUF EWIG WINTER website'
              width='400'
              height='400'
              loading='lazy'
            />
          </a>
        </Link>
        <Link href='/work/portfolio-website'>
          <a>
            <img
              src='img/portfolio.jpg'
              alt='Portfolio website'
              width='400'
              height='400'
              loading='lazy'
            />
          </a>
        </Link>
        <Link href='/work/personal-blog'>
          <a>
            <img
              src='img/blog.jpg'
              alt='Personal blog'
              width='400'
              height='400'
              loading='lazy'
            />
          </a>
        </Link>
      </div>
    </section>
  );
}
