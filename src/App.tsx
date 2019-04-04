import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavTabs from './components/NavTabs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavTabs/>
      </div>
    );
  }
}

export default App;
