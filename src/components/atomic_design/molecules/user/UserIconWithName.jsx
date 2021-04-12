import React, { memo } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

// import { UserContext } from '../../../../providers/UserProvider';
import { userState } from '../../../../store/userState';

const UserIconWithName = memo((props) => {
  console.log('UserIconWithName');

  const { image, name } = props;
  // const { userInfo } = useContext(UserContext);
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SImg height={160} width={160} src={image} alt="Profile" />
      <SName>{name}</SName>
      {isAdmin && <SEdit>Edit</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  text-text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;

export default UserIconWithName;
