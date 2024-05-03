import { useData } from '../../hooks/useData';

export default function Home() {
  const { data, loading, error } = useData('https://fakestoreapi.com/products');

  return (
    <div className="max-w-screen-xl py-4 px-6">
      {!loading &&
        data.length > 0 &&
        data.map((d) => <p key={d.title}>{d?.title}</p>)}
      {!loading && data.length === 0 && (
        <div className="bg-white">
          <h1>Your Amazon Cart is empty.</h1>
        </div>
      )}
    </div>
  );
}
