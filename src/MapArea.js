import React, {Component} from 'react'
import './MapArea.css'

import Map from './Map'
import SearchArea from './SearchArea'

class MapArea extends Component{

state = {
		//set 5 destinations around Raleigh NC
  locations:[
    {
      name:"Raleigh Airport",
      location: {lat: 35.879915, lng:-78.788141},
      address: "2400 John Brantley Blvd Morrisville, NC 27560"
    },
    {
      name:"William B. Umstead State Park",
      location: {lat: 35.8903808, lng:-78.7503386},
      address: "8801 Glenwood Ave Raleigh, NC 27617"
    },
    {
      name:"University of North Carolina School of Law",
      location: {lat: 35.7846633, lng:-78.6820946},
      address: "Raleigh, NC 27695"
    },
    {
      name:"Research Triangle Park",
      location: {lat: 35.9056034, lng:-78.904884},
      address: "Durham, NC"
    },
    {
      name:"PNC Arena",
      location: {lat: 35.8033437, lng:-78.7239833},
      address: "1400 Edwards Mill Rd Raleigh, NC 27607"
    }
  ],
  locationMarkers: [],
  isOpen: false,
  prevMarker: "",
  infoWindow: "",
  showSearchContents: true 
}
  gatherMarkers = (markersGathered) =>{
    this.setState({locationMarkers: markersGathered})
    // console.log(this.state.locationMarkers.length)
  }

  changeClassName = (event) => {
    event.stopPropagation()
    this.setState({isOpen: !this.state.isOpen})
    this.setState({showSearchContents: !this.state.showSearchContents})
  }

  setInfoString = (infoWin) => {
    this.setState({infoWindow: infoWin})
  }

  setWikipediaContent = (marker) => {
    var self = this
    var searchTerm = marker.title
    var url = "https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=pageimages%7Cpageterms&generator=prefixsearch&redirects=1&formatversion=2&piprop=thumbnail&pithumbsize=250&pilimit=20&wbptterms=description&gpssearch="+searchTerm+"&gpslimit=20"
    fetch(url)
      .then(function(response){
        if(response.status !== 200){
          self.state.infoWindow.setContent("Sorry but this data cannot be loaded right now")
          return
        }
        response.json().then(function(data){
          var image = data.query.pages[0].thumbnail.source
          var description = data.query.pages[0].terms.description[0]

          // console.log(description)
          self.state.infoWindow.setContent('<div><b>' + marker.title + '</b></div>' + '\n'
          + '<div>' + marker.address + '</div>' + '\n'
          + '<img src=' + image +'>' + '\n'
          + 'Description: ' + description)
        })
      }).catch(function(err){
        self.state.infoWindow.setContent("Trouble connecting to Wikipedia")
      })
  }

  //set the info window with a bolded title and address underneath 
  setInfoWindow = (marker) => {
      var self = this
      this.closeInfoWindow()
      this.setState({prevMarker: marker})
      this.state.infoWindow.open(this.state.map, marker)
      this.setWikipediaContent(marker)
      marker.setAnimation(window.google.maps.Animation.BOUNCE)
    window.google.maps.event.addListener(this.state.infoWindow, "closeclick", function(){
      self.closeInfoWindow()
    })
  } 

  closeInfoWindow = () =>{
    if (this.state.prevMarker){
      this.state.prevMarker.setAnimation(null)
    }
    this.setState({prevMarker: ""})
    this.state.infoWindow.close()
  } 



	render(){
    // console.log("State", this.state)
    const locationMarkers = []
    let toggleMapSize = this.state.isOpen ? 'map-container-expand' : 'map-container'
		let toggleSearchBarSize = this.state.isOpen ? 'search-container-shrink' : 'search-container'
    return(
		 <div>
			  <div id={toggleMapSize}>
        		 <Map id="map" 
             infoWin={this.setInfoString} 
             openInfoWin={this.setInfoWindow} 
             gatherMarkers={this.gatherMarkers} 
             locationMarkers = {locationMarkers} 
             locations={this.state.locations} 
             />
			  </div>

			  <div id={toggleSearchBarSize}>
           <div>
             <button id="search-button" onClick={this.changeClassName}>Search</button>
           </div>
			  	  <SearchArea 
            setMarker={this.setInfoWindow} 
            locationMarkers= {this.state.locationMarkers} 
            showSearch={this.state.showSearchContents}
            />
			  </div>

			</div>
		)
	}
}
export default MapArea