import React, { Component } from 'react';
import './App.css';

import Map from './Map'

class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to My Neighborhood</h1>
        </header>

        <Map id="map" lat= {40.7413549} lng= {-73.9980244} />
      </div>
    );
  }
}

export default App;

