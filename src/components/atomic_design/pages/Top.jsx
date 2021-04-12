import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

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
  const history = useHistory();

  const onClickAdmin = () =>
    history.push({
      pathname: '/atomic_design/users',
      state: { isAdmin: true },
    });
  const onClickGeneral = () =>
    history.push({
      pathname: '/atomic_design/users',
      state: { isAdmin: false },
    });

  return (
    <SContainer>
      <h2>TOP</h2>
      <PrimaryButton>Test</PrimaryButton>
      <SecondaryButton>Search</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
      <br />
      <SecondaryButton onClick={onClickAdmin}>Admin</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>General</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

export default Top;
