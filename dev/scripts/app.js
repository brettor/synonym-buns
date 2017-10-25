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
			<div className='app'>
				<header>
					<div className='wrapper'>
						<form onSubmit={this.handleSubmit}>
							<label>
								What's the word?
								<input type="text" value={this.state.value} onChange={this.handleChange} />
							</label>
							<input type="submit" value="Submit" />
						</form>
					</div>
				</header>
				<main>
					<div className='wrapper'>
						<div className='bun bunOne'>
							Bun1
						</div>
						<div className='bun bunTwo'>
							Bun2
						</div>
						<div className='bun bunThree'>
							Bun3
						</div>
						<div className='bun bunFour'>
							Bun4
						</div>
						<div className='bun bunFive'>
							Bun5
						</div>
						<div className='bun bunSix'>
							Bun6
						</div>
					</div>
				</main>
				<footer>
					<div className='wrapper'>
						<p>&copy; 2017 Brett Nielsen</p>
					</div>
				</footer>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
