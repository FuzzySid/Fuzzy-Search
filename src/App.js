import React from 'react';
import './App.css';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Results } from './pages/Results';

function App() {
  return (
    // Follow BEM convention
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
             <Results/>
          </Route>
          <Route path="/">
              <Home/>
          </Route>
        </Switch>
      </Router>     
    </div>
  );
}

export default App;
