import React, { Component } from 'react';
import axios from 'axios';
import './detail.css'

// this will house the detail pages for each search card that the user clicks on.

// display search in a scrollable box at the top of the page

// display the sunburst chart below that

export default class Detail extends Component {

	constructor(){
		super();
		this.state = {
			searchData: {}
		}
	}

	componentDidMount(){
		var id = this.props.match.params.id;
		var self = this;

		axios.post('/detail/' + id)
		.then(function(data){
			self.setState({searchData: data.data})
		})
		.catch(function(error){

		})
	}

	displaySearch = function(){
		if(this.state.searchData.search){
			return <div className="searchBox mt-3 mb-3 mx-auto">
				{this.state.searchData.search}
			</div>
		} else {
			return <p className="text-center mt-4">Loading search history...</p>
		}
	}

	// 	var chart = new PersonalitySunburstChart({
	// 'selector':'#sunburstChart',
	// 'version': 'v3',
	// 'd3version': 'v4'
	// });
	// chart.show(response.data);
	// console.log(response);

	render(){
		return (
			<div className="container">
				<h1 className="text-center mt-5">Detail Page</h1>
				{this.displaySearch()}
				<div id="sunburstChart"></div>
			</div>
			)
	}
}