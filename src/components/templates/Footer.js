import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="" target="_blank" rel="noopener noreferrer">
        XXX
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const Footer = () => {
  return (
    <SFooter>
      <Copyright />
    </SFooter>
  );
};

const SFooter = styled.footer`
  background-color: #fafafa;
  color: #000;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export default Footer;
