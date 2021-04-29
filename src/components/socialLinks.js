import React from 'react'

export default class SocialLinks extends React.Component {
	render() {
		const {links}= this.props;
		const socialPanel = links.map(button =>
			<li 
				key={button.id} 
				className="social-link"
			><a href={button.url} dangerouslySetInnerHTML={button.img} />
			</li>
			);

		return (
			<ul className="social-panel">{socialPanel}</ul>
			)
	}
}