import React from 'react';
import {AppBar, Tabs, Tab} from 'material-ui';
import {Link} from 'react-router';
export default class Header extends React.Component{
	render() {
		return(
			 <AppBar title="Go Places"
			 	iconClassNameRight="muidocs-icon-navigation-expand-more">
			 	<Tabs>
			 		<Tab label = "Home&nbsp;" containerElement = {<Link to = '/' />}/>
			 		<Tab label = "&nbsp;Favorites&nbsp;" containerElement = {<Link to = '/favorites' />} />
				</Tabs>
			 </AppBar>
			);
	}
}
