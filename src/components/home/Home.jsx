import { useData } from '../../hooks/useData';
import Category from './category/Category';

export default function Home() {
  const { data, loading, error } = useData('https://fakestoreapi.com/products');

  return (
    <div className="max-w-screen-xl mx-auto py-4 px-6">
      {!loading && data && (
        <div className="flex flex-col gap-12">
          {Object.keys(data).map((key) => (
            <Category key={key} category={key} products={data[key]} />
          ))}
        </div>
      )}
      {/* {!loading && data.length === 0 && (
        <div className="bg-white">
          <h1>Your Amazon Cart is empty.</h1>
        </div>
      )} */}
    </div>
  );
}
