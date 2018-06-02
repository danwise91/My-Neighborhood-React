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
		let toggleSearchbar = this.props.showSearch ? 'searchBar' : 'hide-searchbar'
		let toggleListings = this.props.showSearch ? 'address-listings' : 'hide-address-listings'

		console.log("Props", this.props)
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
		   	<div className="search-contents">
			   	<input
		        type="text"
		        placeholder="Search Locations"
		        className={toggleSearchbar}
		        onChange={(event) => this.updateQuery(event.target.value)}
	           />
	            <ul className={toggleListings}>
            		{showingResults.map((location, index) => (
            		<li key={index}>{location.name}</li>
            	))}
				</ul>
           </div>
         </div>
		)
	}
}

export default SearchArea