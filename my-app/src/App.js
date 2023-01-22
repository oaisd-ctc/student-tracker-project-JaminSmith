import React from 'react';
import { NavLink, HashRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Tracker from './Tracker';
import TrackerEdit from './TrackerEdit';
import Feedback from './Feedback';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact activeStyle={{color: 'green'}}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/tracker" activeStyle={{color: 'green'}}>Tracker</NavLink>
        </li>
        <li>
          <NavLink to="/tracker_edit" activeStyle={{color: 'green'}}>Edit Tracker</NavLink>
        </li>
        <li>
          <NavLink to="/feedback" activeStyle={{color: 'green'}}>Feedback</NavLink>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/tracker" component={Tracker} />
      <Route path="/tracker_edit" component={TrackerEdit} />
      <Route path="/feedback" component={Feedback} />
    </Router>
  );
}

export default App;
