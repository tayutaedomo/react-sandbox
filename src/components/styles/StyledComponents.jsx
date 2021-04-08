import React from 'react';
import styled from 'styled-components';

const StyledComponents = () => {
  return (
    <>
      <SContainer>
        <STitle>- Styled Components -</STitle>
        <SButton>Foo!</SButton>
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const STitle = styled.div`
  margin: 0;
  color: #3d84a8;
`;

const SButton = styled.div`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;

export default StyledComponents;
