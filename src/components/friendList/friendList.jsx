import { FriendListItem } from './FriendListItem.jsx';
import css from './friendList.module.css';

// import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <div className={css.friends}>
      <ul className={css.list}>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </div>
  );
};

// FriendList.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//       id: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };
