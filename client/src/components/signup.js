import React, { Component } from 'react';
import axios from 'axios';
import emailRegex from 'email-regex';
import './signup.css'

// this is the sign up and log in page
export default class SignUp extends Component {

	constructor(){
		super();
		this.state = {
			signupemail: '',
			signuppassword: '',
			signupserverErrors: {},
		}
	}

	handleChange = (event) => {
		const state = this.state;
		state[event.target.name] = event.target.value;
		this.setState(state, () => console.log(this.state));
		console.log(event.target.value);
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
			const { signupemail, signuppassword } = this.state;
			let self = this;
 
			// post to API to add new user
			axios.post('http://localhost:3000/addUser', {
				signupemail, signuppassword
			})
			.then(function(data){
				console.log(data);
			})
			.catch(function(error){
				console.log(error);
				// self.setState({ serverErrors: error.response.data.data });
			})
		}
	}

	canSubmit = (event) => {
		const {signupemail, signuppassword} = this.state;
		return (
			emailRegex().test(signupemail) &&
			signuppassword.length >= 6
		)
	}

	render(){

		const isEnabled = this.canSubmit();

		return (
			<div>
					<div className="dropdown show">

						<a href="#" className="float-right mr-5 mt-3" data-toggle="dropdown">Log In</a>
						<form className="dropdown-menu p-4" autoComplete="off" method="post" action="http://localhost:3000/login">
						  <div className="form-group">
						    <label>Email address</label>
						    <input type="email" className="form-control" name="email" placeholder="email@example.com" />
						  </div>
						  <div className="form-group">
						    <label>Password</label>
						    <input type="password" className="form-control" name="password" id="exampleDropdownFormPassword2" placeholder="Password" />
						  </div>
						  <div><small>When logged in, your searches and results will be saved to your account.</small> </div>
						  <button type="submit" className="btn btn-start">Sign in</button>
						</form>
					</div>

					<div className="container text-center">
						<div><img id="logo" src="/images/caw.png" alt="crow" className="image-fluid mt-5 mb-4"></img></div>

					{/*sign-up form*/}
						<form autoComplete="off">
						  <div className="form-group">
						  <div><small className="float-left mb-5">Caw is a user-friendly interface for the Watson Personality Insights AI, which analyzes portions of text of at least 100 words in length. Results will give insight into the author's personality traits. By signing up with Caw, users will have their searches and results stored for later reference. </small></div>
						    
						    <input type="email" className="form-control" name="signupemail" onChange={this.handleChange} placeholder="Enter email" />
						  </div>
						  <div className="form-group">
						    
						    <input type="password" className="form-control" name="signuppassword" onChange={this.handleChange} placeholder="Password" />
						  </div>
						  <div><small className="float-left">By signing up, you authorize us to remember your searches and results. Data associated with your account will never be shared with other parties. Click on "Use Without Account" if you would not like your data stored. </small></div>
						  <button type="submit" className="btn btn-start" onClick={this.handleSubmit} disabled={!isEnabled}>Sign Up</button>
							<button onClick={this.handleClick} className="btn btn-start mt-3 mb-3">Use Without Account </button>
							
						</form>
						<a href="https://github.com/falondarville/CawAI"><small>Github Repository / </small></a> <a href="https://falondarville.github.io/Portfolio/"><small>Built by Falon Darville</small></a>

				</div>
			</div>
			)
	}
}