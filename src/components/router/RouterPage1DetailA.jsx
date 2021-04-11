import React from 'react';
import { useLocation } from 'react-router';

const RouterPage1DetailA = () => {
  const { state } = useLocation();
  console.log(state);

  return (
    <div>
      <h1>Page1 Detail A</h1>
    </div>
  );
};

export default RouterPage1DetailA;
