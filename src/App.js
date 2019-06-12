import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Package1 from './Package1';
import Package2 from './Package2';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Ru1</Link>
                </li>
                <li>
                  <Link to="/about/">Rut2</Link>
                </li>
                <li>
                  <Link to="/admin/">AdminPanel</Link>
                </li>
              </ul>
            </nav>

            <Route path="/" exact component={Package1} />
            <Route path="/about/" component={Package2} />
            <Route path="/admin/" component={Package1} />
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
