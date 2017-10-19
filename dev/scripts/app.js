import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route, Link } from 'react-router-dom';
import { ajax } from 'jquery';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {value: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	handleChange(event){
		this.setState({value: event.target.value});
	}
	handleSubmit(){
		event.preventDefault();
		let key = `329e5845b48db0aab44801990a002d78`;
		let word = this.state.value;
		$.ajax({
			type: 'GET',
			url: `http://words.bighugelabs.com/api/2/${key}/${word}/json`,
			contentType: "application/json; charset=utf-8",
			dataType: "json"
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
			<form onSubmit={this.handleSubmit}>
				<label>
					What's the word?
					<input type="text" value={this.state.value} onChange={this.handleChange} />
				</label>
				<input type="submit" value="Submit" />
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
