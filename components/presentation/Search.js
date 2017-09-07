import React from 'react';
import TextField from 'material-ui/TextField';
import axios from 'axios';

let citys = '';
let types = '';
export default class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state={data:null};
		this.test = this.test.bind(this);
	}

	componentWillReceiveProps(newProps) {
		console.log("componentWillReceiveProps is called");
	}

	shouldComponentUpdate(newProps, newState) {
		if (this.state.citys !== newState.citys || this.state.types !== newState.types) {
			return true;
		}
		else {
			return false
		}
	}

	componentWillUpdate(nextProps, nextState){
		this.test(nextState.citys,nextState.types);

	}

	params = () => {
		this.setState({citys:this.refs.v1.getValue()});
		this.setState({types:this.refs.v2.getValue()});
	}

	render() {
		return(
			<div>

			<TextField
			ref = 'v1'
			hintText="Ex. Koramangala/ Bangalore"
			floatingLabelText="Enter Location"
			style={{width:'35%', marginRight:24}}
			/>

			<TextField
			ref = 'v2'
			hintText="Ex. Hospitals/ Hotel"
			floatingLabelText="Enter Type"
			style={{width:'35%', marginLeft:100}}/>

			<button onClick = {this.params}>Search</button>

			</div>
			);
	}
		

	test(city,type) {
		
		
		const apikey = 'AIzaSyBjEsJyeUpD0LsClizd6K_fu5BsQDVmxXY';

		let url1 = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=12.9716,77.5946&radius=500&type='+city;
		let url2 = '&keyword='+type+'&key='+apikey;
		let url3 = url1+url2;
		console.log(url3);

		axios.get(url3)
		.then((response) => {
			this.setState({
				data  : response.data
			});
			
			
			let result = this.state.data.results;
			// let result =[];
			
			// console.log(array.length);

			// let resarray = [];
			// let obj = {};
			// array.map(function(x){
			// 	obj = {'photo':x.icon,'name':x.name};

			// 	resarray.push(obj);
			// 	console.log(obj);
			// })
			// result = JSON.stringify(resarray);
			console.log(result);

			this.props.fun(result);
		})
		.catch( (error) => {
			console.log(error);
		});  
		
	}
	
}
