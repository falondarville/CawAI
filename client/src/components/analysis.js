import React, { Component } from 'react';
import axios from 'axios';
import './analysis.css';

export default class Analysis extends Component {

	constructor(){
		super();
		this.state = {
			content: '',
			watsonResponse: { personality: [], needs: [], values: []},
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
 
 		axios.get('http://localhost:3000/api/watson', {
 			params: { content: this.state.content
		 	}
 		})
		 	.then(function(response){

		 		self.setState({watsonResponse: response.data});
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

	render(){

		const isEnabled = this.canSubmit();

		return(
			<div className="container">
			<div className="row">
			<div className="col-md-6 input-column">
			<div className="text-center mt-5">
				<nav><img id="logo-small" className="img-fluid" src="/images/caw-c-only.png"></img></nav>
				
				<h1>Start analyzing your text</h1>
				<p className="mb-3">Enter a minimum of 100 words. <br /> 600 words is better. <br /> 1200 is optimal for the best results.</p>
				<textarea cols="60" rows="10" name="content" onChange={this.handleChange}></textarea><br />
				<button disabled={!isEnabled} onClick={this.handleSubmit} className="btn mt-3 btn-results mb-5">Get your results</button>
			</div>
				{/*add conditional logic .length to check if there are results*/}
				{/*<h2>Results</h2>*/}
				{/*render the percentile and raw_score as graphical representations*/}
			<div className="col-md-6">
				{this.state.watsonResponse.personality.map(function(item, i){
					return <div key={i}>
							<p>{item.name}</p>
							<p>{item.percentile}</p>
							<p>{item.raw_score}</p>
						</div>
				})}
				{this.state.watsonResponse.needs.map(function(item, i){
					return <div key={i}>
							<p>{item.name}</p>
							<p>{item.percentile}</p>
							<p>{item.raw_score}</p>
						</div>
				})}
				{this.state.watsonResponse.values.map(function(item, i){
					return <div key={i}>
							<p>{item.name}</p>
							<p>{item.percentile}</p>
							<p>{item.raw_score}</p>
						</div>
				})}
				</div>
			</div>
			</div>
			</div>
			)
	}
}