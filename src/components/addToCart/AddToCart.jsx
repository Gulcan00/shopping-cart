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
      <div className="grid grid-cols-3">
        <button
          onClick={() => setQuantity((prevQuantity) => prevQuantity - 1)}
          aria-label="decrease"
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <input
          type="number"
          className="p-2 border border-gray-400 text-center"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button
          onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
          aria-label="increase"
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
