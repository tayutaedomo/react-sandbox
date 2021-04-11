import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  const { placeholder = '' } = props;

  return <SInput text="text" placeholder={placeholder} />;
};

const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 9999px;
  outline: none;
`;

export default Input;
