import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useShoppingCartContext } from '../../context/shoppingCart/useShoppingCartContext';

import './header.styles.css';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const { getItemCount } = useShoppingCartContext();

  return (
    <nav className="navbar flex justify-between items-center px-4">
      <div className="flex items-center gap-4">
        <Link to={'/'} className="w-full max-w-28 nav-link">
          <img
            src="images/logo.png"
            alt="Amazon"
            className="object-contain w-28"
          />
        </Link>
        <NavLink to={'/'} className="nav-link">
          Home
        </NavLink>
      </div>
      <Link to={'/cart'} className="flex items-center gap-1 nav-link relative">
        <span className="nav-cart-count font-bold text-lg absolute -top-1 left-9">
          {getItemCount()}
        </span>
        <FontAwesomeIcon icon={faCartShopping} size="xl" aria-hidden="true" />
        <span className="text-sm font-bold mt-2">Basket</span>
      </Link>
    </nav>
  );
}
