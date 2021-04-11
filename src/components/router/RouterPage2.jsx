import React from 'react';
import { Link } from 'react-router-dom';

const RouterPage2 = () => {
  return (
    <div>
      <h1>Page2</h1>
      <Link to="/router/page2/999">UrlParameter</Link>
    </div>
  );
};

export default RouterPage2;
