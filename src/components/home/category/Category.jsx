import PropTypes from 'prop-types';
import Card from '../card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

export default function Category({ category, products }) {
  return (
    <div>
      <h1 className="capitalize font-medium text-2xl mb-2">{category}</h1>
      <div className="flex gap-4 relative">
        <button
          className="absolute left-0 top-1/2 p-4 py-8 bg-slate-200 shadow rounded-r-lg hover:opacity-70 cursor-pointer"
          aria-label="Previous"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
        <button
          className="absolute right-0 top-1/2 p-4 py-8 bg-slate-200 shadow rounded-l-lg"
          aria-label="Next"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

Category.propTypes = {
  category: PropTypes.string,
  products: PropTypes.array,
};
