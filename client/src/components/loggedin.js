import React, { Component } from 'react';
// will need to add Redirect once I integrate checking if the user is logged in or not. If not, the user will be redirected to the homepage and cannot manually access the loggedin page
import { Link } from 'react-router-dom';
// import axios from 'axios';
import './loggedin.css';

export default class LoggedIn extends Component {

	handleClick = () => {
		this.props.history.push('/analysis');
	}

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
			<div>
				<Link className="float-left ml-5 mt-3" to="/">Home</Link>
				<Link className="float-right mr-5 mt-3" to="/logout">Log Out</Link>
				<div className="container text-center">
					<button className="btn btn-start mt-5 mb-3" onClick={this.handleClick}>New Search</button>
				{/*if statement to either display the following title or display saved searches*/}
					<h2>You have no saved searches yet.</h2>
				</div>
			</div>
		)
	}
}