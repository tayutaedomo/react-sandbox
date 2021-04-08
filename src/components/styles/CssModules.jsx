import React from 'react';

import classes from './CssModules.module.scss';

const CssModules = () => {
  console.log(classes.container);

  return (
    <div className={classes.container}>
      <p className={classes.title}>- CSS Modules -</p>
      <button className={classes.button}>Foo!</button>
    </div>
  );
};

export default CssModules;
