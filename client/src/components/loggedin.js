import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
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
			return <h3 className="text-center">You have no saved searches yet.</h3>
		} else {
			return this.state.searchHistory.map(function(panel) { 
				var date = moment(panel.createdAt).format('MMM-DD-YYYY');

				return <a id="link-to-detail" key={panel.id} href={"/detail/" + panel.id}><div className="card mb-2 detail-cards">
				  <div className="card-body">{date} <br />
				  {panel.search.substring(0,100) + '...'}</div>
				</div></a>
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