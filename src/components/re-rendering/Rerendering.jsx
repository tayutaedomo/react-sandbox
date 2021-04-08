import React, { useState, useCallback, useMemo } from 'react';
import ChildArea from './ChildArea';

const Rerendering = () => {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  const tmp = useMemo(() => 1 + 3, []);
  console.log({ tmp });

  return (
    <>
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>Open</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </>
  );
};

export default Rerendering;
