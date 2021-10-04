import "./App.css";
import Profile from "./components/Profile/Profile";
import user from "./components/Profile/user.json";
import Statistics from "./components/Statistics/Statistics";
import statisticalData from "./components/Statistics/statistical-data.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./components/FriendList/friends.json";

const { name, tag, location, avatar, stats } = user;
function App() {
  return (
    <div className="App">
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <FriendList friends={friends} />
    </div>
  );
}

export default App;
