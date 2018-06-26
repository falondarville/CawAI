import React, { Component, Redirect } from 'react';
import './login.css'

// this is the sign up page
export default class Login extends Component {

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
		console.log(event.target.value);
	}

	handleClick = () => {
		this.props.history.push('/analysis');
	}

	handleSubmit = (event) => {
		// check if the form has been filled out correctly
		// if so, post to users route
		if(!this.canSubmit()){
			event.preventDefault();
			return;
		} else {
			event.preventDefault();
			const { email, password } = this.state;
			let self = this;

			// post to API to add new user
			axios.post('/addUser', {
				email, password
			})
			.then(function(data){
				console.log(data);
			})
			.catch(function(error){
				console.log(error);
				self.setState({ serverErrors: error.response.data.data });
			})
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
					{/*branding section*/}
					<a href="/" className="float-right mr-5 mt-3">Log In</a>
					<div className="container text-center">
						<div><img id="logo" src="/images/caw.png" alt="crow logo" className="image-fluid mt-5 mb-4" alt="crow"></img></div>
					{/*sign-up form*/}
						<form>
						  <div className="form-group">
						    
						    <input type="email" className="form-control" name="email" onChange={this.handleChange} placeholder="Enter email" />
						  </div>
						  <div className="form-group">
						    
						    <input type="password" className="form-control" name="password" onChange={this.handleChange} placeholder="Password" />
						  </div>
						  <button type="submit" className="btn btn-start" onClick={this.handleSubmit} disabled={!isEnabled}>Sign Up</button>
							<button onClick={this.handleClick} className="btn btn-start mt-3 mb-3">Use Without Account </button>
						</form>

				</div>
			</div>
			)
	}
}