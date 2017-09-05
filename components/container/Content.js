import React from 'react';
import ReactDOM from 'react-dom';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


export default class Content extends React.Component{
  constructor(props){
    super(props) 
    console.log("Inside Results Constructor"); 
  }
  
  render()
  {
    
    return(
      
        <GridTile
          key={this.props.img}
          title={this.props.name}
          subtitle={<span>by <b>{this.props.Address}</b></span>}
          actionIcon={<button>save</button>}
        >
          <img src={this.props.img} />
        </GridTile>
      
        );  

  
          
  }
  }
