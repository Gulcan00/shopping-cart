import PropTypes from 'prop-types';
import { useState } from 'react';
import { ShoppingCartContext } from './ShoppingCartContext';

export function ShoppingCartProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState([]);

  const getItemCount = () => shoppingCart.length;

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        setShoppingCart,
        getItemCount,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

ShoppingCartProvider.propTypes = {
  children: PropTypes.element,
};
