import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useShoppingCartContext } from '../../context/shoppingCart/useShoppingCartContext';
import { ProductType } from '../../product.type';

export default function AddToCart({ product }) {
  const { addToCart } = useShoppingCartContext();
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="grid grid-cols-1 gap-4">
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
        onClick={() => addToCart(product, quantity)}
      >
        Add to Cart
      </button>
    </div>
  );
}

AddToCart.propTypes = {
  product: ProductType,
};
