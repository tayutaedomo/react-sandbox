import React from 'react';
import styled from 'styled-components';

import { BaseButton } from './BaseButton';

const PrimaryButton = (props) => {
  const { children } = props;

  return <SButton>{children}</SButton>;
};

// const SButton = styled.button`
//   background-color: #40514e;
//   color: #fff;
//   padding: 6px 24px;
//   border: none;
//   border-radius: 9999px;
//   outline: none;
//   &:hover {
//     cursor: pointer;
//     opacity: 0.8;
//   }
// `;
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;

export default PrimaryButton;
