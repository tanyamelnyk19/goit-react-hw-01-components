import Profile from "./components/Profile/Profile";
import user from "./dataFiles/user.json";
import Statistics from "./components/Statistics/Statistics";
import statisticalData from "./dataFiles/statistical-data.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./dataFiles/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./dataFiles/transactions.json";

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

      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
