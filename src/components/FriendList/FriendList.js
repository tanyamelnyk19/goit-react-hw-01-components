import PropTypes from "prop-types";
import s from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={s.item}>
          {isOnline ? (
            <span className={`${s.status} ${s.online}`}></span>
          ) : (
            <span className={`${s.status} ${s.offline}`}></span>
          )}
          <img className={s.avatar} src={avatar} alt={name} width="48" />
          <p className={s.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};
