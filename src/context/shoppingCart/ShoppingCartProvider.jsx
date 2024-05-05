import PropTypes from 'prop-types';
import { useState } from 'react';
import { ShoppingCartContext } from './ShoppingCartContext';

export function ShoppingCartProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState(new Map());

  const getItemCount = () =>
    shoppingCart.values().reduce((count, item) => {
      count += item.quantity;
      return count;
    }, 0);

  const addToCart = (product, quantity) => {
    const newShoppingCart = new Map(shoppingCart);
    newShoppingCart.set(product.id, { product, quantity });
    setShoppingCart(newShoppingCart);
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
