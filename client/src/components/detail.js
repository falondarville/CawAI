import React, { Component } from 'react';
import axios from 'axios';
import PersonalitySunburstChart from 'personality-sunburst-chart/lib/charts/v3-d3v4';
import './detail.css'

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

			var chart = new PersonalitySunburstChart({
				'selector':'#sunburstChart',
				'version': 'v3',
				'd3version': 'v4'
			});
				chart.show(data.data);
				console.log(data);
		})
		.catch(function(error){
			console.log(error)
		})
	}

	displaySearch = function(){
		if(this.state.searchData.search){
			return <div><div className="searchBox mt-3 mb-3 mx-auto">
				{this.state.searchData.search}
			</div>
				<div className="container">
			      <div className="row">
			        <div className="col-sm-12">
			          <div id="sunburstChart"></div>
			        </div>
			      </div>
			    </div>
			</div>
		} else {
			return <p className="text-center mt-4">Loading search history...</p>
		}
	}

	render(){
		return (
			<div className="container">
				<h1 className="text-center mt-5">Your search</h1>
				{this.displaySearch()}
			</div>
			)
	}
}