import React from 'react';
import {AppBar, Tabs, Tab} from 'material-ui';
import {Link} from 'react-router';
class Header extends React.Component{
	render(){
		return(
			 <AppBar title="Go Places"
			 	iconClassNameRight="muidocs-icon-navigation-expand-more">
			 	<Tabs>
			 		<Tab label = "Home&nbsp;"><Link to = '/Index' /></Tab>
			 		<Tab label = "&nbsp;Favorites&nbsp;"><Link to = '/Favorites' /></Tab>
			 		</Tabs>
			 </AppBar>
			);
	}
}

export default Header;