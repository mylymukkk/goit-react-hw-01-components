import PropTypes from 'prop-types';
import React from 'react';

import css from './FriendList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <section className={css.friendsSection}>
      <ul className={css.friendList}>
        {friends.map(friend => (
          <FriendListItem key={friend.id} friend={friend} />
        ))}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
