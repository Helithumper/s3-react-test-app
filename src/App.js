import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <br/>
          Now I have updated this site!
          <br/>
          Now I have again!
          <h1>Let's put in a youtube video for safe measure!</h1>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/V4MF2s6MLxY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </p>
      </div>
    );
  }
}

export default App;
