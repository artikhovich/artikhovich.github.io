import React,{Component} from 'react'
export default class SkillDots extends Component {
	render(){
		const {dots,id} = this.props;
		const dotsElements = dots.map(dot =>
			<li 
				key={dot.id}
				className="skill-dot-item"
			>
				<span className="dot-title">{dot.title}</span>
				<span className="dot-description">{dot.text}</span>
			</li>
			);
			return(<ul className="skill-dots-list">{dotsElements}</ul>)
	}
}