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
          <Route path="/search">
             {/* Search Results  */}
             <h1>Search</h1>
          </Route>
          <Route path="/">
              {/* Home */}
              <Home/>
          </Route>
        </Switch>
      </Router>     
    </div>
  );
}

export default App;
