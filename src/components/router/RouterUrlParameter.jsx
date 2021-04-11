import React from 'react';
import { useParams } from 'react-router-dom';

const RouterUrlParameter = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>UrlParameter</h1>
      <p>Parameter ID: {id}</p>
    </div>
  );
};

export default RouterUrlParameter;
