import { Component } from 'react';
import axios from 'axios';

// when user logs out, he or she will be redirected to the home page
export default class Logout extends Component {
		
	constructor(){
		super();

	axios.post('/logout').then(function(data){
		window.location.href='/';
	})
}
}