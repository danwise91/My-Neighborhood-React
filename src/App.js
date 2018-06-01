import React, { Component } from 'react';
import './App.css'
import Map from './Map'
import Searchbar from './Searchbar'

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

        <div id="search-container">
          <Searchbar />
        </div>
      </div>
    );
  }
}

export default App;

