import React from 'react';
import './App.css';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    // Follow BEM convention
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
              {/* Home */}
              <Home/>
          </Route>
          <Route path="/search">
             {/* Search Results  */}
          </Route>
        </Switch>
      </Router>
        <h1>Fuzzy Search</h1>


       
    </div>
  );
}

export default App;
