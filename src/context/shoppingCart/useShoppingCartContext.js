import { useContext } from 'react';
import { ShoppingCartContext } from './ShoppingCartContext';

export function useShoppingCartContext() {
  return useContext(ShoppingCartContext);
}
