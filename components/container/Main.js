import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';
import Containers from './Containers';

export default class Main extends React.Component{
	constructor(props){
		super(props);
		this.demo = this.demo.bind(this);
		this.state={dems:[]};
	}
	render(){

		return(
			<div>
				<Header />
				<Search fun = {this.demo} />
				<Containers vars = {this.state.dems} />
				<Footer />			
			</div>
			);
	}
	// this is a callback function...
	demo(x){
		this.setState({dems:x});
		console.log(this.state.dems);
	}
}
