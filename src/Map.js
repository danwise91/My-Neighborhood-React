import React, {Component} from 'react'

class Map extends Component{

componentDidMount(){
  window.initMap = this.initMap

  loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyChG57mQJBcrDLaFGNpsfY5fab75v_TWLc&v=3&callback=initMap')
}

initMap = (map) => {
  const google = window.google
  const getMap = document.getElementById('map')
  getMap.style.height = window.innerHeight + "px"
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: this.props.lat, lng: this.props.lng},
    zoom: 13,
    mayTypeControl: false
  });
  
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