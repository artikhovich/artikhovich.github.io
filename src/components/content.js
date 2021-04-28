import './content.css';
import React from 'react';
import SectionOne from './sectionone';
import Muzgram from './muzgram';
import MySkills from './skills/myskills.js';

export default class Content extends React.Component{
	render(){
		const {skillsDB} = this.props;
		return(
			<div className="content">
				<SectionOne />
				<Muzgram />
				<MySkills 
					db={skillsDB} 
				/>
			</div>)
	}
}

