import logo from './images/logo.svg';
import './App.css';
import CallRating from './UI-kit/call-rating/calll-rating';
import CallStatus from './UI-kit/call-status/call-status';
import { callStatuses } from './utils/call-statuses';
import { callRatings } from './utils/call-ratings';



function App() {
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
    </div>
  );
}

export default App;
