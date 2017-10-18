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
			<form>
				<input className='userInput'>

				</input>
			</form>
			<div className='bun bunOne'>
				
			</div>
			<div className='bun bunTwo'>
				
			</div>
			<div className='bun bunThree'>
				
			</div>
			<div className='bun bunFour'>
				
			</div>
			<div className='bun bunFive'>
				
			</div>
			<div className='bun bunSix'>
				
			</div>
			<div className='bun bunSeven'>
				
			</div>
			<div className='bun bunEight'>
				
			</div>
			<div className='bun bunNine'>
				
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
