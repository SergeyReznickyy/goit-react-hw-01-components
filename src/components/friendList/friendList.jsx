import css from './friendList.module.css';
// import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <div className={css.friends}>
      <ul className={css.list}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li className={css.item} key={id}>
            <div className={`${css.status} ${isOnline ? css.true : css.false}`}>
              <div className={css.text}>{isOnline ? 'Online' : 'Offline'}</div>
            </div>
            <img className={css.avatar} src={avatar} alt={name} width="48px" />
            <p className={css.name}>{name}</p>
          </li>
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
