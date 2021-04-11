import React from 'react';
import { Link } from 'react-router-dom';

const RouterLinks = () => {
  return (
    <div>
      <Link to="/router">Home</Link>
      <br />
      <Link to="/router/page1">Page1</Link>
      <br />
      <Link to="/router/page2">Page2</Link>
    </div>
  );
};

export default RouterLinks;
