import './content.css';
import React from 'react';
import SectionOne from './sectionone';
import Muzgram from './muzgram';

export default class Content extends React.Component{
	render(){
		return(
			<div className="content">
				<SectionOne />
				<Muzgram />
			</div>)
	}
}

