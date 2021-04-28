import './myskills.css'
import React from 'react';

export default class Content extends React.Component {
	render(){
		const {db} = this.props;
		const elements = db.map(skill =>{
return(<div 
		className='skill-section-item'
		key={skill.id}
		>
		<div className='skill-item-title'>{skill.title}</div>
		<div className='skill-item-dots'>{skill.dots}</div>

	</div>)
		});

		return(
			<div className='myskills' style={{display:"flex",flexFlow:"column wrap",flex:"3 0 350px"}}>
				<div className='skills-row'>{elements}</div>
			</div>
			)
	}
}
