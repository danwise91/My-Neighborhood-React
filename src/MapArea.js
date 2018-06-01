import React, {Component} from 'react'
import './MapArea.css'
import Map from './Map'
import SearchArea from './SearchArea'

class MapArea extends Component{

state = {
		//set 5 destinations around Raleight NC
  markers:[
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
      name:"Prestonwood Country Club",
      location: {lat: 35.7957278, lng:-78.8381674},
      address: "1197 Crabtree Crossing Pkwy Morrisville, NC 27560"
    },
    {
      name:"North Cary Park",
      location: {lat: 35.8217956, lng:-78.7901738},
      address: "1100 Norwell Blvd Cary, NC 27513"
    },
    {
      name:"PNC Arena",
      location: {lat: 35.8033437, lng:-78.7239833},
      address: "1400 Edwards Mill Rd Raleigh, NC 27607"
    }
  ]
	}
	render(){
		return(
		   <div>
			  <div id="map-container">
        		 <Map id="map" markers={this.state.markers} lat= {35.8436867} lng= {-78.7851406} />
			  </div>

			  <div id="search-container">
			  	<SearchArea markers={this.state.markers}/>
			  </div>

			</div>
		)
	}
}
export default MapArea