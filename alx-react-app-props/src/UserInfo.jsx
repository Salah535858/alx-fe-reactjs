// src/UserInfo.jsx
import React, { useContext } from 'react';
import UserDetails from './UserDetails';
import UserContext from './UserContext';

function UserInfo() {
  const userData = useContext(UserContext);

  return <UserDetails />;
}

export default UserInfo;

