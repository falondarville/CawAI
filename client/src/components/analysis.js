import React, { Component } from 'react';
import axios from 'axios';
import './analysis.css';

export default class Analysis extends Component {

	constructor(){
		super();
		this.state = {
			content: '',
			watsonResponse: {}
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
 
 		axios.get('http://localhost:3000/api/watson', {
 			params: { content: this.state.content
		 	}
 		})
		 	.then(function(response){

		 		this.setState({watsonResponse: response.data});
		 		console.log(response);
		 	})
		 	.catch(function(error){
		 		console.log(error);
		 	})
	}

	render(){
		return(
			<div>
				<h1>Start analyzing your text</h1>
				<h4>Enter a minimum of 100 words.</h4>
				<input name="content" onChange={this.handleChange}></input>
				<button onClick={this.handleSubmit} className="btn btn-primary">Get your results</button>
				<p>{watsonResponse.consumption_preferences}</p>
				<p>{watsonResponse.needs}</p>
				<p>{watsonResponse.personality}</p>
				<p>{watsonResponse.values}</p>
			</div>
			)
	}
}