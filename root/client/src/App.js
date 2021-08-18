import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useState } from 'react';
import Form from './Form';
import Score from './Score';
import Game from './Game';
import SubmitForm from './SubmitForm';
import './index.css';
import CurrentScore from './CurrentScore';

function App() {

  const [Difficulty, setDifficulty] = useState();
  const [ID, setID] = useState();

  return (
    <Router>
      <div className="app">
        <CurrentScore />
        <div className="game">
        <Switch>
          <Route exact path='/'>
            <Form setDifficulty = { setDifficulty } setID = { setID } />
              <h2>{ID}</h2>
              <h2>{Difficulty}</h2>
          </Route>
          <Route exact path='/game'>
            <Game />
          </Route>
          <Route exact path='/submit'>
            <SubmitForm score={ Score } id={ ID }/>
          </Route>
          <Route exact path='/scores'>
            <Score />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
