import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const RouterPage1 = () => {
  const arr = [...Array(100).keys()];

  const history = useHistory();

  const onClickDetailA = () => history.push('/router/page1/detailA');

  return (
    <div>
      <h1>Page1</h1>
      <Link to={{ pathname: '/router/page1/detailA', state: arr }}>
        Detail A
      </Link>
      <br />
      <button onClick={onClickDetailA}>Detail A</button>
    </div>
  );
};

export default RouterPage1;
