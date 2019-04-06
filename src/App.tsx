import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavTabs from './components/NavTabs';
import { Provider } from 'mobx-react';
import newsStore from './store/newsStore.store'

class App extends Component {
  render() {
    return (
        <div className="App">
          <NavTabs email={""}/>
        </div>

    );
  }
}

export default App;
