import React, {Component} from 'react'
import './App.css'

class Map extends Component{

//make sure component did mount then initialize initMap
componentDidMount(){
  window.initMap = this.initMap
//load URL to Google API through loadJS function at the bottom.
//React has issues asyncrously loading URLs so we will need a function
//defined out of the scope of React for this path to load
  loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyChG57mQJBcrDLaFGNpsfY5fab75v_TWLc&v=3&callback=initMap')
}

//initialize the map along with the markers
initMap = (map) => {
  //must define the google namespace
  const google = window.google
  const getMap = document.getElementById('map')
  getMap.style.height = window.innerHeight + "px"
//set the map using exact lat and lng props passed from the App.js component 
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: this.props.lat, lng: this.props.lng},
    zoom: 13,
    mayTypeControl: false
  });

//grab reference to all markers in the state
  const allMarkers = this.props.markers

  //create info window for markers
  const inforWindow = new google.maps.InfoWindow()

  for (let i = 0; i < allMarkers.length; i++){
    // console.log("State", this.state.markers);
    var position = allMarkers[i].location
    var title = allMarkers[i].name
    var address = allMarkers[i].address
//define the position where the marker will drop
    var marker = new google.maps.Marker({
      map: map,
      position: position,
      title: title,
      address: address,
      animation: google.maps.Animation.DROP,
      id: 1
    })
    //create a new array to push all markers into then 
    //set the new state of the markers 
      const newMarkerArray = []
      newMarkerArray.push(marker)
      //add listener to each marker to open the info window
      //at each marker
      marker.addListener('click', function(){
        setInfoWindow(this, inforWindow)
      })
      this.setState({markers: newMarkerArray})
  }
  //set the info window with a bolded title and address underneath 
  function setInfoWindow(marker, infowindow){
    if (infowindow.marker !== marker){
      infowindow.marker = marker
      infowindow.setContent('<div><b>' + marker.title + '</b></div>' + '\n'
        + '<div>' + marker.address + '</div>')
      infowindow.open(map, marker)
      infowindow.addListener('click', function(){
        infowindow.marker = null
      })
    }
  }
  
}

	render(){
   
		return(  
			 <div id={this.props.id}></div>
		)
	}
}

export default Map;

function loadJS(src){
  var ref = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
}