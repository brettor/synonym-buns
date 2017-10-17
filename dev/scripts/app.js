import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route, Link } from 'react-router-dom';
import $ from 'jquery';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			word: ''
		}
	getWord(){
		
	}
	getResults(){
		let key = `329e5845b48db0aab44801990a002d78`
		ajax({
			url: `http://words.bighugelabs.com/api/2/${key}/${word}/json`,
			data: {
				 
			}
		}).then((res) => {
			console.log(res);
		});
	}
	displayResults(){

	}
	displayResult(){
		
	}
	render(){
		return(
			<div>
				<h1>I'm Working!</h1>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
