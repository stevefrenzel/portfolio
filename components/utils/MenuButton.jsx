import { useState } from 'react';

export default function MenuButton() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = () => setMenuOpen(!menuOpen);
  return (
    <div
      className={menuOpen ? 'menu-button open' : 'menu-button false'}
      onClick={toggle}
    >
      <div className='menu-button-burger'></div>
    </div>
  );
}
