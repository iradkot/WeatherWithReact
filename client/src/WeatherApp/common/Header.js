import React from 'react';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
        <ul className="nav nav-tabs">
          <li role="presentation"><Link to="/">Home</Link></li>
          <li role="presentation"><Link to="/login">Login</Link></li>
          <li role="presentation"><Link to="/register">Register</Link></li>
        </ul>
    );
  }
}

export default App;