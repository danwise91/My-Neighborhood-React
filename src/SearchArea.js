import React, {Component} from 'react'
import './SearchArea.css'

class SearchArea extends Component{
	state = {
		query: ''
	}

	render(){
		const locationNames = this.props.markers

		return(
		<div>
		<div>
		 <input
	        type="text"
	        placeholder="Search Locations"
	        className="searchBar"
           />
          </div>
           <div>
            <ul className="address-listings">
            {locationNames.map((location, index) => (
            		<li>{location.name}</li>
            	))}
				</ul>
           </div>
         </div>
		)
	}
}

export default SearchArea