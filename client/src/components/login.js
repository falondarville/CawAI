import React, { Component } from 'react';
import axios from 'axios';
import emailRegex from 'email-regex';
import './signup.css';

export default class Login extends Component {

	constructor(){
		super();
		this.state = {
			email: '',
			password: ''		
		}
	}

	handleChange = (event) => {
		const state = this.state;
		state[event.target.name] = event.target.value;
		this.setState(state, () => console.log(this.state));
	}

	// how do I access whether or not I am logged in?
	isLoggedIn = function() {
		if (this.props.loggedin) {
			return <a href="/loggedin" className="float-right mr-5 mt-3">My Searches</a>
		} else {
			return <a href="#" className="float-right mr-5 mt-3" data-toggle="dropdown">Log In</a>
		}
	}

	canSubmit = (event) => {
		const {email, password} = this.state;
		return (
			emailRegex().test(email) &&
			password.length >= 0
		)
	}

	render(){

		const isEnabled = this.canSubmit();

		return(
			<div className="dropdown show">
				{this.isLoggedIn()}
				<form className="dropdown-menu p-4" autoComplete="off" method="post" action="/login">
				  <div className="form-group">
				    <label>Email address</label>
				    <input type="email" className="form-control" value={this.state.email} onChange={this.handleChange} name="email" placeholder="email@example.com" />
				  </div>
				  <div className="form-group">
				    <label>Password</label>
				    <input type="password" className="form-control" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Password" />
				  </div>
				  <div><small>When logged in, your searches and results will be stored to your account. </small> </div>
				  <button type="submit" className="btn btn-start float-right" disabled={!isEnabled}>Sign in</button>
				</form>
			</div>
		)
	}
}