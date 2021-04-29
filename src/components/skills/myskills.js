import './myskills.css'
import React from 'react';
import SkillDots from './skillDots'
const dotsBack = ({dots}) => (
	<div className="dots-back">{
		dots.map(dot => (
			<li key={dot.title}>{dot.title}</li>))
	}</div>
	);


export default class Content extends React.Component {
	render(){
		const {db} = this.props;
		const elements = db.map(skill =>{
			return(
				<div 
					className='skill-section-item'
					key={skill.id}
				>
				<div className='skill-item-title'>{skill.title}</div>
					<SkillDots dots={skill.dots} id={skill.id} />
				</div>
			)
			}
		);

		return(
			<div className='myskills' style={{display:"flex",flexFlow:"column wrap",flex:"3 0 350px"}}>
				<div className='skills-row'>{elements}</div>
			</div>
			)
	}
}
