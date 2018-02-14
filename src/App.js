import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//containers
import Planner from './containers/Planner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Planner/>
      </div>
    );
  }
}

export default App;
