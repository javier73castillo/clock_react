import "./App.css";
import Clock from "./components/Clock.jsx";
import Countdown from "./components/Countdown.jsx";
import Stopwatch from "./components/Stopwatch.jsx";

function App() {
  return (
    <div className="App">
      <div className="containe"> <h1>Clock</h1>
        <h1>Clock:</h1>
        <Clock />
      </div>
      <div className="containe">
        <h1>Countdown:</h1>
        <Countdown />
      </div>
      <div className="containe">
        <h1>StopWatch:</h1>
        <Stopwatch />
    </div>
    </div>
  );
}

export default App;
