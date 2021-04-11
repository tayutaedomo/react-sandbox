import React from 'react';
import styled from 'styled-components';

import PrimaryButton from '../atoms/button/PrimaryButton';
import SecondaryButton from '../atoms/button/SecondaryButton';
import SearchInput from '../molecules/SearchInput';
import UserCard from '../organisms/user/UserCard';

const user = {
  name: 'Taro',
  image: 'https://source.unsplash.com/NE0XGVKTmcA',
  email: 'aaa@example.com',
  phone: '000-9999-8888',
  company: {
    name: 'AAA Inc.',
  },
  website: 'https://google.com',
};

const Top = () => {
  return (
    <SContainer>
      <h2>TOP</h2>
      <PrimaryButton>Test</PrimaryButton>
      <SecondaryButton>Search</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

export default Top;
