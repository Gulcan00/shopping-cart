import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import './header.styles.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar flex justify-between items-center px-4">
      <Link to={'/'} className="w-full max-w-28 nav-link">
        <img src="images/logo.png" alt="Amazon" className="object-contain" />
      </Link>
      <Link className="flex items-center gap-1 nav-link">
        <FontAwesomeIcon icon={faCartShopping} size="xl" />
        <span className="text-sm font-bold mt-2">Basket</span>
      </Link>
    </nav>
  );
}
