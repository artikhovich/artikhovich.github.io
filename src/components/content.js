import './content.css';
import React from 'react';
import SectionOne from './sectionone';

export default class Content extends React.Component{
	render(){
		return(
			<div className="content">
			<SectionOne/>
			</div>)
	}
}