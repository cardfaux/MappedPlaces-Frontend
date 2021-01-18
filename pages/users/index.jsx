import React from 'react';

import UsersList from '../../components/user/UsersList/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'James Hagood',
      image:
        'https://sparedshared16.files.wordpress.com/2018/02/hagood.png?w=175&h=277',
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
