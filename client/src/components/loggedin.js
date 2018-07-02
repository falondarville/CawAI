import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import './loggedin.css';

export default class LoggedIn extends Component {

	constructor() {
		super();
		this.state = {
			// search history should have four parts for each panel: datetime, search, results, and snippet. User will click on the panel to get to detail page. 
			searchHistory: [],
			redirectToLogin: false
		}
	}

	componentDidMount(){

		var self = this;

		axios.post('/authuser').then(function(data){
			
			const userData = data.data

			// I want to display date and snippet from the database information on panels. Once you click on a panel, I want user to be taken to a detail page. 
			self.setState({
				searchHistory: userData })
			})
			.catch(function(error){
				self.setState({ redirectToLogin: true });
		})
		console.log(this.state);
	}

	// 	{/*if statement to either display the following title or display saved searches*/}
	// if (this.state.searchHistory.length === 0) {
	// 	return <h2>You have no saved searches yet.</h2>
	// } else {
	// {render panel for each saved search that includes date and snipper}
	// searchHistory.map((panel) => 
	// 	return <div class="panel panel-default">
	// 	  <div class="panel-body">{panel}</div>
	// 	</div>
	// 	)
	// }

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
				</div>
			</div>
		)
	}
	}
}