import './app.css';
import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import Footer from './components/footer';

import {contentDB} from './db/contentDB'
import Content from './components/content';

class App extends React.Component {
	render(){
		return(
			<div className="app">
				<Header />
				<Content 
					skillsDB={contentDB} 
				/>
				<Footer />
			</div>
			)
	}
}
ReactDOM.render(<App />,document.getElementById('app'));