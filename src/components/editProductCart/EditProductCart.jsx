import { useLocation } from 'react-router-dom';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useShoppingCartContext } from '../../context/shoppingCart/useShoppingCartContext';
import { ProductType } from '../../product.type';

export default function EditProductCart({ product, initialQuantity = 0 }) {
  const location = useLocation();
  const { addToCart, removeFromCart } = useShoppingCartContext();
  const [quantity, setQuantity] = useState(initialQuantity);

  const isCartPage = location.pathname === '/cart';

  return (
    <div className="flex flex-wrap justify-between gap-8 items-end">
      <div className="flex-1 flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() =>
              setQuantity((prevQuantity) => {
                if (prevQuantity > 0) {
                  return prevQuantity - 1;
                }
                return 0;
              })
            }
            aria-label="decrease"
            className="text-gray-700 rounded-full hover:bg-gray-900 hover:text-white"
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <input
            type="number"
            className="p-2 border border-gray-400 rounded text-center"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min={0}
            aria-label="quantity"
          />
          <button
            onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
            aria-label="increase"
            className="text-gray-700 rounded-full hover:bg-gray-900 hover:text-white"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <button
          className="bg-yellow-300 rounded-full py-2 hover:bg-yellow-400"
          onClick={() => {
            const newQuantity = quantity == 0 ? quantity + 1 : quantity;
            addToCart(product, newQuantity);
            setQuantity(newQuantity);
          }}
        >
          {isCartPage ? 'Update Cart' : 'Add to Cart'}
        </button>
      </div>
      {isCartPage && (
        <button
          onClick={() => removeFromCart(product.id)}
          className="text-blue-600 hover:underline"
        >
          Delete
        </button>
      )}
    </div>
  );
}

EditProductCart.propTypes = {
  product: ProductType,
  initialQuantity: PropTypes.number,
};
