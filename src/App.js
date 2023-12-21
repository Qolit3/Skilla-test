import logo from './images/logo.svg';
import './App.css';
import CallRating from './UI-kit/call-rating/calll-rating';
import CallStatus from './UI-kit/call-status/call-status';
import { callStatuses } from './utils/call-statuses';
import { callRatings } from './utils/call-ratings';
import Avatar from './UI-kit/avatar/avatar';



function App() {
  const avatarSrc = "https://sun9-77.userapi.com/s/v1/ig2/L6CqvJOhuCgKmt-ydDuo-I9Dg3mRR2ej0XAvxFu7_PqDmk45YjMgLWvaEiAfqopAHIpnJ9twfkT_HOXDqrgnmxyl.jpg?size=50x50&quality=95&crop=574,749,796,796&ava=1"

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <CallRating grade={callRatings.BAD} />
      <CallStatus status={callStatuses.INCOMING} />
      <Avatar source={avatarSrc} />
    </div>
  );
}

export default App;
