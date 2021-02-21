import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default () => {
  return (
    <Typography variant="h6" color="inherit" noWrap>
      <Link color="initial" href="/">
        React Sandbox
      </Link>
    </Typography>
  );
};
