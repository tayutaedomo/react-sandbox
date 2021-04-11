import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const RouterUrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <div>
      <h1>UrlParameter</h1>
      <p>Parameter ID: {id}</p>
      <p>Query Name: {query.get('name')}</p>
    </div>
  );
};

export default RouterUrlParameter;
