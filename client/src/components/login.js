import React, { Component } from 'react';
import './login.css'

export default class Login extends Component {
	render(){
		return (
			<div>
				<div className="triangle"></div>
					<div className="container text-center">
						<h1>CAW AI</h1>
						<h2>Analyze the tone of any text. </h2>
						<button className="btn btn-grad">Get started </button>
						<h2>Caw louder by refining your language.</h2>
						<p>Make your voice heard by being consistent in your personal branding, establishing a tone across your communications, and preserving your sentiments.</p>
				</div>
			</div>
			)
	}
}