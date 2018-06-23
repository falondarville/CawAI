import React, { Component } from 'react';
import './login.css'

export default class Login extends Component {

	handleClick = () => {
		window.location.assign('/analysis');
	}

	render(){
		return (
			<div>
				<div className="triangle"></div>
				<a className="float-right mr-2 mt-2" href='#'>Create an account.</a>
					<div className="container text-center">
						<div><img id="logo" src="/images/caw.png" className="image-fluid" alt="crow"></img></div>
						<button onClick={this.handleClick} className="btn btn-start mt-3 mb-3">Enter </button>
						
						{/*<div className="card">*/}
{/*  							<div className="card-body">
							Make your voice heard by being consistent in your personal branding, establishing a tone across your communications, and preserving your sentiments.
						  </div>*/}
						{/*</div>*/}
				</div>
			</div>
			)
	}
}