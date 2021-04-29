import './app.css';
import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import Footer from './components/footer';

import {contentDB} from './db/contentDB'
import Content from './components/content';

class App extends React.Component {
	render(){
		let dateNow = new Date();
		let monthNow = dateNow.toLocaleString('default', {month: 'long'});
		let yearNow = dateNow.getFullYear();
		return(
			<div className="app">
				<Header />
				<Content 
					skillsDB={contentDB} 
				/>
				<Footer 
				month = {monthNow}
				year={yearNow}
				/>
			</div>
			)
	}
}
ReactDOM.render(<App />,document.getElementById('app'));