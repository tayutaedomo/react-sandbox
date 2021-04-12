import React, { memo } from 'react';
import styled from 'styled-components';

import PrimaryButton from '../atoms/button/PrimaryButton';
import Input from '../atoms/input/Input';

const SearchInput = memo(() => {
  console.log('SearchInput');

  return (
    <SContainer>
      <Input placeholder="Search keyword" />
      <SButtonWrapper>
        <PrimaryButton>Search</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
});

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;

export default SearchInput;
