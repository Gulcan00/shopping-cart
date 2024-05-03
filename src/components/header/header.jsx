import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import './header.styles.css';

export default function Header() {
  return (
    <nav className="navbar flex justify-between items-center px-4">
      <h1>amazon logo</h1>
      <a className="flex items-center gap-2">
        <FontAwesomeIcon icon={faCartShopping} />
        Basket
      </a>
    </nav>
  );
}
