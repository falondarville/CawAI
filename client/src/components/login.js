import React, { Component, Redirect } from 'react';
import './login.css'

export default class Login extends Component {

	handleClick = () => {
		this.props.history.push('/analysis');
	}

	handleSubmit = () => {
		// check if the form has been filled out correctly
		// if so, post to users email and password
	}

	render(){

		return (
			<div>
					{/*branding section*/}
					<a href="/" className="float-right mr-5 mt-3">Log In</a>
					<div className="container text-center">
						<div><img id="logo" src="/images/caw.png" alt="crow logo" className="image-fluid mt-5 mb-4" alt="crow"></img></div>
					{/*sign-up form*/}
						<form>
						  <div className="form-group">
						    
						    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
						  </div>
						  <div className="form-group">
						    
						    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
						  </div>
						  <button type="submit" className="btn btn-start" onClick={this.handleSubmit}>Sign Up</button>
							<button onClick={this.handleClick} className="btn btn-start mt-3 mb-3">Use Without Account </button>
						</form>

				</div>
			</div>
			)
	}
}