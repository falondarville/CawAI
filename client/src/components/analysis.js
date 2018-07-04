import React, { Component } from 'react';
import axios from 'axios';
import './analysis.css';
import { Link } from 'react-router-dom';
import PersonalitySunburstChart from 'personality-sunburst-chart/lib/charts/v3-d3v4';

export default class Analysis extends Component {

	// if user is logged in, post the search data to UserData table in association with the user
	constructor(){
		super();
		this.state = {
			content: '',
			watsonResponse: { 
				personality: [], 
				needs: [], 
				values: [] 
			}
		}
	}

	handleChange = (event) => {
		const state = this.state;
		state[event.target.name] = event.target.value;
		this.setState(state, () => console.log(this.state));
		console.log(event.target.value);
	}

	handleSubmit = (event) => {

		event.preventDefault();

		let self = this;
 
 		axios.post('/api/watson', {
 			content: this.state.content
 		})
		 	.then(function(response){

		 		self.setState({watsonResponse: response.data});

		 		var chart = new PersonalitySunburstChart({
			    	'selector':'#sunburstChart',
			    	'version': 'v3',
			    	'd3version': 'v4'
			  	});
			  	chart.show(response.data);
		 		console.log(response);
		 	})
		 	.catch(function(error){
		 		console.log(error);
		 	})
	}

	canSubmit = (event) => {
		const { content } = this.state;

		return (
			content.split(' ').length > 99
			)
	}

	// make sure that this is working to detect whether or not the user is logged in
	isLoggedIn = function() {
		if (this.props.loggedin) {
			return <a href="/loggedin" className="float-right mr-5 mt-3">My Searches</a>
		} 
	}

	render(){

		const isEnabled = this.canSubmit();

		return(
			<div>
				<Link className="float-left ml-5 mt-3" to="/">Home</Link>

					<div className="container">
						<div className="text-center">
							<img id="logo-small" alt="logo" className="img-fluid mt-5 ml-5" src="/images/caw-c-only.png"></img>
							{this.isLoggedIn()}
							<h1>Start analyzing your text</h1>
								<p className="mb-3">Enter a minimum of 100 words. 
								<br /> 600 words is better. <br /> 
								1200 is optimal for the best results.</p>
							<textarea cols="60" rows="10" name="content" onChange={this.handleChange}></textarea>
							<br />
							<button disabled={!isEnabled} onClick={this.handleSubmit} className="btn mt-3 btn-results mb-5">Get your results</button>
						</div>
						    <div className="container">
						      <div className="row">
						        <div className="col-sm-12">
						          <div id="sunburstChart"></div>
						        </div>
						      </div>
						    </div>
					</div>
			</div>
			)
	}
}