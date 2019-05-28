import React from 'react';
import './hero.scss';
import {Button} from 'carbon-components-react';

export default class Hero extends React.Component {
	render() {
		return (
			<div className="hero-container">
				<div className="hero-content">
					<h1 className="hero-title">Welcome to my page</h1>
					<div className="here-desc">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</div>
					<Button
						kind="secondary"
						className="hero-button"
						iconDescription="Button icon"
					> CALL TO ACTION </Button>
				</div>
			</div>
		)
	}
}
