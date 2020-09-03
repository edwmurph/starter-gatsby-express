import React from 'react';
import useAPI from '../hooks/useAPI';

const Home = () => {
  const { data, error } = useAPI({ path: '/api/health' });

  return (
    <div>
      <h1>data: {data}</h1>
      <h1>error: {error && error.toString()}</h1>
    </div>
  );
};

export default Home;
