import React, { memo } from 'react';
const style = {
  width: '100%',
  height: '200px',
  backgroundColor: 'khaki',
};

const ChildArea = memo((props) => {
  const { open } = props;
  console.log('ChildArea rendered!');

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log('...');
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>Child Component</p>
        </div>
      ) : null}
    </>
  );
});

export default ChildArea;
