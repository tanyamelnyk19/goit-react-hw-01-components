import PropTypes from "prop-types";
import s from "./Friend.module.css";

export default function Friend({ id, avatar, name, isOnline }) {
  return (
    <li key={id} className={s.item}>
      {isOnline ? (
        <span className={`${s.status} ${s.online}`}></span>
      ) : (
        <span className={`${s.status} ${s.offline}`}></span>
      )}
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

Friend.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
