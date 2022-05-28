import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';
import Scroll from './Scroll';
import './App.css'


class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange =(event) => {
		this.setState({searchfield: event.target.value})
	}

	render () {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.aname.includes(this.state.searchfield);
		})
			
		return (
			<div className='tc'>
				<h1 className='f1'>Karrokhi Family</h1>
				<h2 className='f2 head'>عائلة مصطفى كروخي</h2>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
		);
	}
}

export default App;
