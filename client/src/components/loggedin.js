import React, { Component } from 'react';
import axios from 'axios';
import './loggedin.css';

export default class LoggedIn extends Component {

	// axios get request to get past searches associated with an account

	// constructor(){
	// 	super();
	// 	this.state: {
	// 		date: '',
	// 		search: '',
	// 		results: ''
	// 	}
	// }

	// var self = this;

	// axios.post('/authuser').then(function(data){
	// 	const userData = data.data

	// 	self.setState({
	// 		user: {

	// 		}
	// 	})
	// })

	render(){
		return (

			<h2>You have no saved searches yet.</h2>
		)
	}
}