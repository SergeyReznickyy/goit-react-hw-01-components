import css from './friendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <div className={`${css.status} ${isOnline ? css.true : css.false}`}>
        <div className={css.text}>{isOnline ? 'Online' : 'Offline'}</div>
      </div>
      <img className={css.avatar} src={avatar} alt={name} width="48px" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
