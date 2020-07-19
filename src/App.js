import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <Link to={"/"}>
              Build-A-Base
              </Link>
          </nav>
        </header>

        <main>
          <Switch>
            <Route exact path='/' />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
