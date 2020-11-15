import MenuButton from './utils/MenuButton';

export default function Navigation() {
  return (
    <header id='navigation'>
      <nav>
        <ul>
          <li>
            <a href='#welcome'>✌️ Steve Frenzel</a>
          </li>
          <li>
            <a href='#main'>About</a>
          </li>
          <li>
            <a href='#services'>Services</a>
          </li>
          <li>
            <a href='#references'>References</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
        <MenuButton />
      </nav>
    </header>
  );
}
