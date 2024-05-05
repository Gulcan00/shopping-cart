import { useState, useEffect } from 'react';

export function useData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url, { mode: 'cors' });
      const resData = await response.json();

      if (response.ok) {
        const categorizedData = resData.reduce((obj, product) => {
          if (!obj[product.category]) {
            obj[product.category] = [];
          }

          obj[product.category].push(product);
          return obj;
        }, {});
        setData(categorizedData);
      } else {
        setError(resData);
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
