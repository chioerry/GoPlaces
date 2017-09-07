import React from 'react';
import ReactDOM from 'react-dom';
import Content from './Content';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

export default class Containers extends React.Component{

 
  constructor(props) {
    super(props);
    console.log("Inside Results Constructor"+this.props.vars);
    this.state={
      result:[]
    }
  }
    
  render() {
    const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1600,
    height: 580,
    overflowY: 'auto',
  },
};
        var results = this.props.vars.map(function(element) {
                  
                return <Content name={element.name} Address={element.vicinity} img={element.icon} />;
      }) 
  	
    return(
     <div style={styles.root}>
     <GridList
      cellHeight={310}
      style={styles.gridList} cols={3}
      >
      {results}
    </GridList>  
     </div>
        );  
          
  }

  
}