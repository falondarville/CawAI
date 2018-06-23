import React, { Component } from 'react';
import './analysis.css';

export default class Analysis extends Component {
	render(){
		return(
			<h1>Start analyzing your text</h1>
			<input></input>
			<button className="btn btn-primary">Get your results</button>
			)
	}
}