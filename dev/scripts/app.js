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
