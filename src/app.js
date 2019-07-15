import './app.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

class App extends React.Component {
	render(){
		return(
			<div className="app">
				<Header />
				<Content />
				<Footer />
			</div>
			)
	}
}
ReactDOM.render(<App />,document.getElementById('app'));