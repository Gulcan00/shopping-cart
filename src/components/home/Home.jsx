import { useData } from '../../hooks/useData';
import Card from './card/Card';

export default function Home() {
  const { data, loading, error } = useData('https://fakestoreapi.com/products');

  return (
    <div className="max-w-screen-xl mx-auto py-4 px-6">
      {!loading &&
        data.length > 0 &&
        data.map((product) => <Card key={product.id} product={product} />)}
      {/* {!loading && data.length === 0 && (
        <div className="bg-white">
          <h1>Your Amazon Cart is empty.</h1>
        </div>
      )} */}
    </div>
  );
}
