import logo from './logo.svg';
import './App.css';

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
      </header>
    </div>
  );
}

export default App;

/* import React, { Component } from 'react';
import './App.css';
import SimpleForm from './SimpleForm.js';

class App extends Component {
 render() {
 return (
 <div className="App demoForm">
 <h1>React Form Validations</h1><hr style={{ borderTop: '3px solid purple' }} />
 <SimpleForm />
 </div>
 );
 }
}

export default App; */