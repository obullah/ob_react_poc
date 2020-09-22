import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import EditorDemo from './components/editor';
import CalendarDemo from'./components/calender';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> EditorDemo </Link></li>
            <li><Link to={'/calender'} className="nav-link">CalendarDemo</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={EditorDemo} />
              <Route path='/calender' component={CalendarDemo} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;