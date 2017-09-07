import React from 'react';
import Footer from '../presentation/Footer';
import Search from '../presentation/Search';
import Containers from '../presentation/Containers';

export default class Main extends React.Component{
	constructor(props){
		super(props);
		this.state={dems:[]};
	}
	render = () => {

		return(
			<div>
				<Search fun = {this.demo} />
				<Containers vars = {this.state.dems} />
				<Footer />			
			</div>
			);
	}
	// this is a callback function...
	demo = (x) => {
		this.setState({dems:x});
		console.log(this.state.dems);
	}
}
