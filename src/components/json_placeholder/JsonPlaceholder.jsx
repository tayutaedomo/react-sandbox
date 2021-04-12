import React from 'react';
import axios from 'axios';

const JsonPlaceholder = () => {
  const onClickUsers = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const onClickUser1 = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>user with id:1</button>
    </div>
  );
};

export default JsonPlaceholder;
