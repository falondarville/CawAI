import React, { Component } from 'react';
import axios from 'axios';
import './loggedin.css';

export default class LoggedIn extends Component {

	// this page should only be accessible when a user is logged in
	// use redirectToLogin method that you used with USUME
	// https://github.com/falondarville/usume/blob/master/client/src/components/loggedin.jsx
	// axios get request to get past searches associated with an account
	// add functionality for users to be able to clear past results 

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