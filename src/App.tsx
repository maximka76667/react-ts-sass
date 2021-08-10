import React from 'react';
import logo from './logo.svg';
import './App.sass';

function App() {

  function handleClick (e: number): void {
    console.log(e);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => handleClick(321)}>Click</button>
      </header>
    </div>
  );
}

export default App;
