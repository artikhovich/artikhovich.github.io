import './header.css';
import './navbar.css';
import React from 'react';
import SocialLinks from './socialLinks';

export default class Header extends React.Component {
	constructor(props){
		super(props);
		this.state={
			isNavActive:false,
			itemID:0
		}
		this.itemSelect = id => {
			const idx = this
			this.setState({
				itemID:id
			});	
			console.log(id);
		}	
	}
	render(){
		const {itemID,isNavActive} = this.state
		const {navLinks,links} = this.props
		return(
			<div className="header">
				<Navbar
					links = {navLinks} 
					selectId={this.state.itemID}
				/>
				<SocialLinks links={links} />
			</div>
			)
	}
}

class Navbar extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			selectId:0
		};

		this.toggleLink = id => {
			{ /*const idx = this.props.link.findIndex(el=>el.id == id); */ }
			this.setState({selectId:id});
			console.log(id);
		}
	}
	render(){
		const {links,selectId,toggleLink} = this.props
		const navElements = links.map(link =>
			<li key={link.id} className="nav-item">
				<Link
					  link={link}
					  toggleLink={() => this.toggleLink(link.id)}
				 />
			 </li>
			)
		let classNames = "navbar navbar-default navbar-fixed-top";

		return(
			<div id="header" className="header">
					<nav className={classNames}>
						<h1 onClick={this.navClick}>Главная</h1>
						<ul className="navbar-list">{navElements}</ul>
					</nav>
			</div>
			)
	}
}

class Link extends React.Component {
	render(){
		const {link,toggleLink} = this.props
		return(
			<span onClick={toggleLink} className='link-id-item'>{link.label}</span>
			)
	}
}