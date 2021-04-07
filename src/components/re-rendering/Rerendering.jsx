import React, { useState } from 'react';
import ChildArea from './ChildArea';

const Rerendering = () => {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);

  return (
    <>
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>Open</button>
      <ChildArea open={open} />
    </>
  );
};

export default Rerendering;
