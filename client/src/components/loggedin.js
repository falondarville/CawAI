import React, { Component } from 'react';
// will need to add Redirect once I integrate checking if the user is logged in or not. If not, the user will be redirected to the homepage and cannot manually access the loggedin page
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import './loggedin.css';

export default class LoggedIn extends Component {

	// 1. axios get request to get past searches associated with an account
	// 2. Additional functionality: users can clear past results 

	constructor() {
		super();
		this.state = {
			search: '',
			results: '',
			redirectToLogin: false
		}
	}

	componentDidMount(){

		console.log("Component did mount.");

		// axios.post('/authuser').then(function(data){
		// 	const userData = data.data

		// 	// I want to display date and snippet from the database information on panels. Once you click on a panel, I want user to be taken to a detail page. Note that multiple searches and results will need to be stored in state (as an array?)
		// 	self.setState({
		// 		search: userData.search, 
		// 		results: userData.results
		// 	})
		// 	.catch(function(error){
		// 		self.setState({ redirectToLogin: true });
		// 	})
		// }
	}

	handleClick = () => {
		this.props.history.push('/analysis');
	}

	render(){

		const { redirectToLogin } = this.state;

		if(redirectToLogin) {
			return <Redirect to={{ pathname: '/login' }} />
		} else {

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
}