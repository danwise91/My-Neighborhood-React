import React, {Component} from 'react'

class Searchbar extends Component{
	state = {
		query: ''
	}

	render(){
		return(
		<div>
		 <input
	        type="text"
	        placeholder="Search Locations"
	        className="searchBar"
           />
         </div>
		)
	}
}

export default Searchbar