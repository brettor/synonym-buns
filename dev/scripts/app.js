import React from 'react';
import ReactDOM from 'react-dom';
import { ajax } from 'jquery';

class App extends React.Component {
	constructor(){
		super();
		this.state = {value: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	handleChange(event){
		this.setState({
			value: event.target.value
		});
	}
	handleSubmit(){
		event.preventDefault();
		let key = `329e5845b48db0aab44801990a002d78`;
		let word = this.state.value;
		ajax({
			url: `http://words.bighugelabs.com/api/2/${key}/${word}/json`,
			type: 'GET',
			contentType: "application/json; charset=utf-8",
			dataType: "json"
		}).then((res) => {
			console.log(res);
		});
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
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
