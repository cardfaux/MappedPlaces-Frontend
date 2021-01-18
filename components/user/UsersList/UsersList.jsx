import React from 'react';

import UserItem from '../UserItem/UserItem';
import styles from './UsersList.module.css';

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className='center'>
        <h2>No Users Found</h2>
      </div>
    );
  }

  return (
    <ul className={styles.users_list}>
      {props.items.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
};

export default UsersList;
