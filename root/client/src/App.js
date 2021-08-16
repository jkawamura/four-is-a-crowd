import logo from './logo.svg';
import { Router, Route, Switch } from "react-router";
import './App.css';
import Game from './Game';

function App() {
  return (
    <div className="board">
      <Game />
    </div>
  );
}

export default App;
