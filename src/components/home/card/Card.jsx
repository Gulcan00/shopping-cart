import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';

import { ProductType } from '../../../product.type';
import EditProductCart from '../../editProductCart/EditProductCart';

export default function Card({ product }) {
  return (
    <div className="bg-white shadow-md w-80">
      <div>
        <a className="relative block pt-[100%] cursor-pointer hover:opacity-70">
          <img
            src={product.image}
            alt={product.title}
            className="w-[50%] m-auto absolute top-0 left-0 right-0 bottom-0 object-cover"
          />
        </a>
        <div className="grid grid-cols-1 gap-1 p-4">
          <a className="truncate hover:text-[#f08804] cursor-pointer">
            {product.title}
          </a>
          <div className="flex gap-1 text-sm">
            {product.rating.rate}
            <Rating
              initialRating={product.rating.rate}
              emptySymbol={
                <FontAwesomeIcon icon={faStar} color="#ffa41c" size="lg" />
              }
              fullSymbol={
                <FontAwesomeIcon icon={faSolidStar} color="#ffa41c" size="lg" />
              }
              readonly
            />
            <span className="text-gray-600">{product.rating.count}</span>
          </div>
          <p className="flex">
            <span className="self-start text-sm">$</span>
            <span className="text-lg font-semibold">{product.price}</span>
          </p>
          <EditProductCart product={product} />
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  product: ProductType,
};
