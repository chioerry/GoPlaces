import React from 'react';
import {FontIcon, BottomNavigation, BottomNavigationItem, Paper} from 'material-ui';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;

class Footer extends React.Component{
	state = {selectedIndex : 0,};

	select = (index) => this.setState({selectedIndex: index});

	render(){
		return(
				<Paper>
					<BottomNavigation selectedIndex = {this.state.selectedIndex} style = {{backgroundColor:"rgba(232,234,212,1.0)"}}>
						<BottomNavigationItem label = "Recents" icon = {recentsIcon} onClick = {() => this.select(0)}/>
						<BottomNavigationItem label = "Favorites" icon = {favoritesIcon} onClick = {() => this.select(1)}/>
					</BottomNavigation>
				</Paper>
			);
	}
}

export default Footer;