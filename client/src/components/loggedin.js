import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import './loggedin.css';

export default class LoggedIn extends Component {

	constructor() {
		super();
		this.state = {
			searchHistory: [],
			redirectToLogin: false
		}
	}

	componentDidMount(){

		var self = this;

		axios.post('/authuser').then(function(data){
			
			const userData = data.data

			self.setState({
				searchHistory: userData })
			})
			.catch(function(error){
				self.setState({ redirectToLogin: true });
		})
		console.log(this.state);
	}

	handleClick = () => {
		this.props.history.push('/analysis');
	}

	displayHistory = function() {
		if (this.state.searchHistory.length === 0) {
			return <h2>You have no saved searches yet.</h2>
		} else {
			return this.state.searchHistory.map(function(panel) { 
				return <div class="panel panel-default">
				  <div class="panel-body">{panel.createdAt}</div>
				</div>
			})
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
				<Link className="float-right mr-5 mt-3" to="/logout">Log Out</Link>
				<div className="container text-center">
					<button className="btn btn-start mt-5 mb-3" onClick={this.handleClick}>New Search</button>
				</div>
				{this.displayHistory()}
			</div>
		)
	}
	}
}