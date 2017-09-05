import React from 'react';
import TextField from 'material-ui/TextField';
import axios from 'axios';

export default class Search extends React.Component{
	constructor(props)
	{
		super(props);
		this.test = this.test.bind(this);
		this.state={data:null};
	}
	render(){
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

			<button onClick = {this.test}>Search</button>

			</div>
			);
	}

	test(){
		let citys = this.refs.v1.getValue();
		let types = this.refs.v2.getValue();
		const apikey = 'AIzaSyBjEsJyeUpD0LsClizd6K_fu5BsQDVmxXY';

		let url1 = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=12.9716,77.5946&radius=500&type='+citys;
		let url2 = '&keyword='+types+'&key='+apikey;
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
