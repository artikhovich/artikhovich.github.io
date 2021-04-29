import './footer.css';
import React from 'react'
export default class Footer extends React.Component{
	render(){
		const {month,year} = this.props;
		return(
			<div className="footer">Артихович Сергей, {month} {year} </div>)
	}
}