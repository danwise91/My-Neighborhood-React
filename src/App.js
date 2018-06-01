import React, { Component } from 'react';
import './App.css'
import MapArea from './MapArea'

class App extends Component {


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to My Neighborhood</h1>
        </header>
        <MapArea />
      </div>
    );
  }
}

export default App;

