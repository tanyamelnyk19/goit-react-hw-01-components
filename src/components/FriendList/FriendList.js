import PropTypes from "prop-types";
import Friend from "../Friend/Friend";
export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <Friend key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};
