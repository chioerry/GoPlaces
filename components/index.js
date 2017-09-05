import React from 'react';
import ReactDom from 'react-dom';
import { Route, Router} from 'react-router';
import Main from './container/Main';
import Favorites from './Favorites';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Index extends React.Component{
	render(){

			return (

				<MuiThemeProvider>
				<Main />
				</MuiThemeProvider>
			);
	}	
	
}

ReactDom.render((
<Router history = {BrowserHistory}>
<Route path = '/' component = {Index}>
<Route path = 'Index' component = {Main} />
<Route path = 'Favorites' component = {favorites} />
</Route>
</Router>
), document.getElementById('root')
);
