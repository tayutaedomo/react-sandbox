import React, { createContext } from 'react';

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const contextName = 'foo';

  return (
    <UserContext.Provider value={{ contextName }}>
      {children}
    </UserContext.Provider>
  );
};
