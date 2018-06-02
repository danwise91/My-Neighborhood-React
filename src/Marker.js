import React, {Component} from 'react'

class Marker extends Component{
	
componentDidMount(){
	window.initMarkers = this.initMarkers
}

initMarkers = () => {
  const google = window.google

  const markers = this.props.allMarkers

	//create info window for markers
  const infoWindow = new google.maps.InfoWindow()

  for (let i = 0; i < markers.length; i++){
    // console.log("State", this.state.markers);
    var position = markers[i].location

    var title = markers[i].name
    var address = markers[i].address
//define the position where the marker will drop
    var marker = new google.maps.Marker({
      map: this.props.map,
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
        setInfoWindow(this, infoWindow)
      })
      this.setState({markers: newMarkerArray})

      //set the info window with a bolded title and address underneath 
  function setInfoWindow(marker, infowindow){
    if (infowindow.marker !== marker){
      infowindow.marker = marker
      infowindow.setContent('<div><b>' + marker.title + '</b></div>' + '\n'
        + '<div>' + marker.address + '</div>')
      infowindow.open(this.props.map, marker)
      infowindow.addListener('click', function(){
        infowindow.marker = null
      })
    }
   }
  }
}
	render(){
		console.log("Props", this.props)
		return(
			<div></div>
		)
	}
}
export default Marker