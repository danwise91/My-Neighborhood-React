import React, {Component} from 'react'

class Map extends Component{

state = {
  //set 5 destinations around Raleight NC
  markers:[
    {
      name:"Raleigh Airport",
      location: {lat: 35.879915, lng:-78.788141}
    },
    {
      name:"William B. Umstead State Park",
      location: {lat: 35.8903808, lng:-78.7503386}
    },
    {
      name:"Prestonwood Country Club",
      location: {lat: 35.7957278, lng:-78.8381674}
    },
    {
      name:"North Cary Park",
      location: {lat: 35.8217956, lng:-78.7901738}
    },
    {
      name:"PNC Arena",
      location: {lat: 35.8033437, lng:-78.7239833}
    }
  ]
}

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
  const allMarkers = this.state.markers

  for (let i = 0; i < allMarkers.length; i++){
    // console.log("State", this.state.markers);
    var position = allMarkers[i].location
    var title = allMarkers[i].name
//define the position where the marker will drop
    var marker = new google.maps.Marker({
      map: map,
      position: position,
      title: title,
      animation: google.maps.Animation.DROP,
      id: 1
    })
    //create a new array to push all markers into then 
    //set the new state of the markers 
      const newMarkerArray = []
      newMarkerArray.push(marker)
      this.setState({markers: newMarkerArray})
  }
  
}

	render(){
   
		return(
			 <div id={this.props.id}>
       </div>
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