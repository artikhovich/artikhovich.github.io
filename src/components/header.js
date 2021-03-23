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
				<h1>Главная
				<button type="button" onClick={this.navClick}>V</button>
				</h1>
				<ul className="navbar-list">
					<li className="navbar-item"><a>Музыкальная грамота</a></li>
					<li className="navbar-item"><a>Из истории музыки</a></li>
					<li className="navbar-item"><a>Контакты</a></li>
				</ul>
			</nav>
			)
	}
}