import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Inputs from '../color-slider/inputs.js/index.js';
import Box from '../color-slider/box.js/index.js';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar bg-dark">
          <Link className="nav-link" to="/">
            The Numbers Game
          </Link>
          <Link className="nav-link" to="/word">
            The Word Game
          </Link>
          <Link className="nav-link" to="/inventory">
            The Inventory Game
          </Link>
        </nav>

        <Switch>
          <Route path="/word">
            <WordGameApp />
          </Route>
          <Route path="/inventory">
            <InventoryGameApp />
          </Route>
          <Route path="/">
            <NumberGameApp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
