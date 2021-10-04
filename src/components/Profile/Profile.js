import PropTypes from "prop-types";
import p from "./Profile.module.css";

export default function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={p.profile}>
      <div className={p.description}>
        <img src={avatar} alt="Аватар пользователя" className={p.avatar} />
        <p className={p.name}>{name}</p>
        <p className={p.tag}>@{tag}</p>
        <p className={p.location}>{location}</p>
      </div>

      <ul className={p.stats}>
        <li className={p.item}>
          <span className={p.label}>Followers</span>
          <span className={p.quantity}>{stats.followers}</span>
        </li>
        <li className={p.item}>
          <span className={p.label}>Views</span>
          <span className={p.quantity}>{stats.views}</span>
        </li>
        <li className={p.item}>
          <span className={p.label}>Likes</span>
          <span className={p.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
