import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
        console.log(url)
      const { data: responseData } = await axios.get(url);
      if (Object.keys(responseData).length === 0) {
        setError(true);
      }
      setData(responseData);
      setLoading(false);
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { error, loading, data };
}

export default useFetch;
