import React, {Component} from 'react'
import './SearchArea.css'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class SearchArea extends Component{
	state = {
		query: ''
	}

	updateQuery = (query) =>{
		this.setState({query: query.trim()})
	}



	render(){
		const {query} = this.state
		const locationNames = this.props.markers

		let showingResults 
		if(query){
			const match = new RegExp(escapeRegExp(query), 'i')
			showingResults = locationNames.filter((location) => match.test(location.name))
		} else {
			showingResults = locationNames
		}

		showingResults.sort(sortBy('name'))

		return(
		<div>
		<div>
		 <input
	        type="text"
	        placeholder="Search Locations"
	        className="searchBar"
	        onChange={(event) => this.updateQuery(event.target.value)}
           />
          </div>
           <div>
            <ul className="address-listings">
            {showingResults.map((location, index) => (
            		<li>{location.name}</li>
            	))}
				</ul>
           </div>
         </div>
		)
	}
}

export default SearchArea