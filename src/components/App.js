import React from 'react';
import { RecoilRoot } from 'recoil';

import Router from '../router/Router';
import { UserProvider } from '../providers/UserProvider';

export default function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
}
