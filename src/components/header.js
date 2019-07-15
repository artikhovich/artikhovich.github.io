import './header.css';
import './navbar.css';
import React from 'react';
export default class Header extends React.Component {
	render(){
		return(
			<div className="header">
			<Navbar />
			</div>
			)
	}
}

class Navbar extends React.Component{
	constructor(props){
		super(props);
			this.state={
				isNavActive:false
			}
			this.navClick=()=>{
				this.setState({
					isNavActive:!this.state.isNavActive
				});
			}
		}
	render(){
		const {isNavActive}=this.state;
		let classNames = "navbar navbar-default navbar-fixed-top";
if(isNavActive){
	classNames += " active"
}
		return(
			<nav className={classNames}>
				<h1>Navbar</h1>
				<button type="button" onClick={this.navClick}>V</button>
			</nav>
			)
	}
}