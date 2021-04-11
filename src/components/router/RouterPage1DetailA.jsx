import React from 'react';
import { useLocation, useHistory } from 'react-router';

const RouterPage1DetailA = () => {
  const { state } = useLocation();
  console.log(state);

  const history = useHistory();

  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>Page1 Detail A</h1>
      <button onClick={onClickBack}>Go back</button>
    </div>
  );
};

export default RouterPage1DetailA;
