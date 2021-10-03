import './App.css';
import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';

const { name, tag, location, avatar,stats } = user;
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
    </div>
  );
}

export default App;
