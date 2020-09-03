import { useState, useEffect } from 'react';
import axios from 'axios';

const { NODE_ENV } = process.env;
const serverHost = NODE_ENV === 'production' ? '' : 'http://localhost:3000';

const useAPI = ({ host = serverHost, path, defaultData = null }) => {
  const [data, setData] = useState(defaultData);
  const [error, setError] = useState(null);
  const url = `${host}${path}`;

  useEffect(() => {
    const get = async () => {
      try {
        const result = await axios.get(url);
        setData(result.data);
      } catch (ex) {
        setError(ex);
      }
    };
    get();
  }, [url]);

  return { data, error };
};

export default useAPI;
