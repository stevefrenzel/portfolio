// TODO Loop through data set for social links
// TODO Date needs to be dynamic

export const config = {
  unstable_runtimeJS: false,
};

export default function Footer() {
  return (
    <footer>
      <ul>
        <li id='email-icon'>
          <a href='mailto:stevefrenzel@gmx.de'>E-Mail</a>
        </li>
        <li id='linkedin-icon'>
          <a
            href='https://www.linkedin.com/in/stevefrenzel/'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
        </li>
        <li id='twitter-icon'>
          <a href='https://twitter.com/stvfrnzl' rel='noopener noreferrer'>
            Twitter
          </a>
        </li>
        <li id='github-icon'>
          <a href='https://github.com/stevefrenzel' rel='noopener noreferrer'>
            GitHub
          </a>
        </li>
      </ul>
      <span>&copy; 2021 Steve Frenzel</span>
    </footer>
  );
}
