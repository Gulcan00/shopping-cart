import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from '../card/Card';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Category({ category, products }) {
  return (
    <div>
      <h1 className="capitalize font-medium text-2xl mb-2" id={category}>
        {category}
      </h1>
      <Carousel responsive={responsive}>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </Carousel>
    </div>
  );
}

Category.propTypes = {
  category: PropTypes.string,
  products: PropTypes.array,
};
