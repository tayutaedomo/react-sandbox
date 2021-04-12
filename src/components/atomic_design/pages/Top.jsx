import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import PrimaryButton from '../atoms/button/PrimaryButton';
import SecondaryButton from '../atoms/button/SecondaryButton';
import SearchInput from '../molecules/SearchInput';
import UserCard from '../organisms/user/UserCard';
// import { UserContext } from '../../../providers/UserProvider';
import { userState } from '../../../store/userState';

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
  // const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push('/atomic_design/users');
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push('/atomic_design/users');
  };

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
