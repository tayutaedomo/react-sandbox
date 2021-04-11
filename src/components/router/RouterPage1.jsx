import React from 'react';
import { Link } from 'react-router-dom';

const RouterPage1 = () => {
  const arr = [...Array(100).keys()];

  return (
    <div>
      <h1>Page1</h1>
      <Link to={{ pathname: '/router/page1/detailA', state: arr }}>
        Detail A
      </Link>
    </div>
  );
};

export default RouterPage1;
