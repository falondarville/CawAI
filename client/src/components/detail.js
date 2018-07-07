import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import PersonalitySunburstChart from 'personality-sunburst-chart/lib/charts/v3-d3v4';
import './detail.css';

export default class Detail extends Component {

	constructor(){
		super();
		this.state = {
			searchData: {},
			loggedIn: true,
			redirectToLogin: false
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
				chart.show(JSON.parse(data.data.results));
				console.log(data);
		})
		.catch(function(error){
			console.log(error)
			this.setState({redirectToLogin: true})
		}.bind(this))
	}

	isLoggedIn = function() {
		if (this.state.loggedIn) {
			return <a href="/loggedin" className="float-right mr-5 mt-3">My Searches</a>
		}
	}

	displaySearch = function(){
		if(this.state.searchData.search){
			return <div><div className="searchBox mt-3 mb-3 mx-auto">
				{this.state.searchData.search}
			</div>
				<div className="container">
			      <div className="row justify-content-center">
			        <div className="col-sm-8">
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

		const { redirectToLogin } = this.state;

		if(redirectToLogin) {
			return <Redirect to={{ pathname: '/login' }} />
		} else {

		return (
			<div>
				<Link className="float-left ml-5 mt-3" to="/">Home</Link>
						{this.isLoggedIn()}
				<div className="container">
				<div className="row">
					<div className="col-12">
						<h1 className="text-center mt-5">Your search</h1>
					</div>
				</div>
				{this.displaySearch()}
			</div>
			</div>
			)
		}
	}
}