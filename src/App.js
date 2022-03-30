import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="root">

        </div>
      </div>
    </div>
  );
}

function tick() {
  const element = (
    <div>
      <h2> 현재 시각 {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  //ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

export default App;