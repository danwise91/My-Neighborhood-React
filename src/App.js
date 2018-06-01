import React, { Component } from 'react';
import './App.css'
import Map from './Map'

class App extends Component {


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to My Neighborhood</h1>
        </header>
        <div id="map-container">
        <Map id="map" lat= {35.8436867} lng= {-78.7851406} />
        </div>
      </div>
    );
  }
}

export default App;

