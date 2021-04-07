import React from 'react';
const style = {
  width: '100%',
  height: '200px',
  backgroundColor: 'khaki',
};

function ChildArea(props) {
  const { open } = props;

  return (
    <>
      {open ? (
        <div style={style}>
          <p>Child Component</p>
        </div>
      ) : null}
    </>
  );
}

export default ChildArea;
