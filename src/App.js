import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import ColorSlider from './color-slider/colorSliderApp';
import { waitForDomChange } from '@testing-library/react';
import ThisWeek from './This-Week/thisWeek';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar bg-dark">
          <Link className="nav-link" to="/color">
            Color Slider
          </Link>
          <Link className="nav-link" to="/thisWeek">
            The Word Game
          </Link>
        </nav>

        <Switch>
          <Route path="/color">
            <ColorSlider />
          </Route>
          <Route path="/thisWeek">
            <ThisWeek />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
