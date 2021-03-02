import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayersData from "./components/player-data/PlayersData";

function App() {
  return (
    <div className="App">
      <h1>
        WELCOME TO <span className="brandName">SHAHIDAAC FC TEAM</span>
        SELECTION PANEL
      </h1>
      <PlayersData></PlayersData>
    </div>
  );
}

export default App;
