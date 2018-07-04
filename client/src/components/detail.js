import React, { Component } from 'react';
import './detail.css'

// this will house the detail pages for each search card that the user clicks on.

// display search in a scrollable box at the top of the page

// display the sunburst chart below that

export default class Detail extends Component {

	// 	var chart = new PersonalitySunburstChart({
	// 'selector':'#sunburstChart',
	// 'version': 'v3',
	// 'd3version': 'v4'
	// });
	// chart.show(response.data);
	// console.log(response);

	render(){
		return (
			<div className="container">
				<h1 className="text-center mt-5">Detail Page</h1>
				<div className="searchBox mt-3 mb-3 mx-auto">
					Web development is overwhelmingly community driven. We share tools, libraries, frameworks, code snippers, solutions, and questions. Our work would take tremendously more time and effort if we did not use each other’s code. Another way in which web development is community driven is also through the in-person and online help we seek. Throughout my past six months as a web developer, I’ve learned quite a bit about the process of asking and receiving help.

					Getting the wrong kind of help
					Not all people are suited to answering your question, no matter how much experience they have. Some will not pay full attention when you explain your problem. Others will disregard you as incapable of understanding. The hardest type of help that I have coping with is those who fixate on a part of your code that has nothing to do with getting to the solution. These are people who will begin criticizing your choice of software tools, minor and irrelevant details, and structuring (which can all be fixed at a later point). This distracts you from your core goal that the moment.
				</div>

				<div id="sunburstChart"></div>
			</div>
			)
	}
}