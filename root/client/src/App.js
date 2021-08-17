import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import Game from './Game';
import { useState } from 'react';
import Form from './Form';
import SubmitForm from './SubmitForm';
function App() {

  const [Difficulty, setDifficulty] = useState();
  const [ID, setID] = useState();

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Form setDifficulty = { setDifficulty } setID = { setID } />
              <h2>{ID}</h2>
              <h2>{Difficulty}</h2>
          </Route>
          <Route exact path='/game'>
            <Game />
          </Route>
          <Route>
            <SubmitForm difficulty={ Difficulty } id={ ID }/>
          </Route>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
