import PropTypes from 'prop-types';
import { useState } from 'react';
import { ShoppingCartContext } from './ShoppingCartContext';

export function ShoppingCartProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState([]);

  const getItemCount = () => shoppingCart.length;

  const addToCart = (item) => {
    setShoppingCart([...shoppingCart, item]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        setShoppingCart,
        getItemCount,
        addToCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

ShoppingCartProvider.propTypes = {
  children: PropTypes.element,
};
