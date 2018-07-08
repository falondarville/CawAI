import React, { Component } from 'react';
import axios from 'axios';
import './signup.css'
import Login from './login.js'
import swal from 'sweetalert'

// this is the sign up and log in page
export default class SignUp extends Component {

	constructor(){
		super();
		this.state = {
			email: '',
			password: '',
			serverErrors: {}	
		}
	}

	handleChange = (event) => {
		const state = this.state;
		state[event.target.name] = event.target.value;
		this.setState(state, () => console.log(this.state));
	}

	handleClick = () => {
		this.props.history.push('/analysis');
	}

	handleSubmit = (event) => {
		if(!this.canSubmit()){
			event.preventDefault();
			return;
		} else {
			event.preventDefault();
			const { email, password } = this.state;

			// post to API to add new user
			axios.post('http://localhost:3000/addUser', {
				email, password
			})
			.then(function(data){
				console.log(data);
				swal("Thanks for signing up! Log in to start saving your searches.")
			})
			.catch(function(error){
				console.log(error);
				this.setState({ serverErrors: error.response.data.data })
			}.bind(this))
		}
	}

	canSubmit = (event) => {
		const {email, password} = this.state;
		return (
			email.length > 0 &&
			password.length >= 6
		)
	}

	render(){

		const isEnabled = this.canSubmit();

		return (
			<div>
					<Login />

					<div className="container text-center">
						<div><img id="logo" src="/images/caw.png" alt="crow" className="image-fluid mt-5 mb-4"></img></div>

						{/*sign-up form*/}
						<form autoComplete="off">
						  <div className="form-group">
						  <div><small className="float-left mb-5">Caw is a user-friendly interface for the Watson Personality Insights AI, which analyzes portions of text of at least 100 words in length. Results will give insight into the author's personality traits. By signing up with Caw, users will have their searches and results stored for later reference. </small></div>
						    
						    <input type="email" className="form-control" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Enter email" />
						    <div className="text-danger">{this.state.serverErrors.email}</div>
						  </div>
						  <div className="form-group">
						    
						    <input type="password" className="form-control" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" />
						    	 <small>Passwords must be 6 characters or more in length.</small>
						  </div>
						  <div><small className="float-left">By signing up, you authorize us to remember your searches and results. Data associated with your account will never be shared with other parties. Click on "Use Without Account" if you would not like your data stored. Note that IBM will have access to text you submit and use this to improve their AI. </small></div>
						  <button type="submit" className="btn btn-start" onClick={this.handleSubmit} disabled={!isEnabled}>Sign Up</button>
							<button onClick={this.handleClick} className="btn btn-start mt-3 mb-3">Use Without Account </button>
							
						</form>
						<a href="https://github.com/falondarville/CawAI"><small>Github Repository / </small></a> <a href="https://falondarville.github.io/Portfolio/"><small>Built by Falon Darville</small></a>

				</div>
			</div>
			)
	}
}