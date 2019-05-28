import React from 'react';
import { Icon } from 'carbon-components-react';
import { iconApps } from 'carbon-icons'

import './header.scss';

export default class PageHeader extends React.Component {
	render() {
		return (
			<div className="header-container">
				<div className="leftMenu">
					<Icon
						style={{margin: '12px 25px'}}
						icon={iconApps}
						fill="#fff"
						description="This is a description of the icon and what it does in context"
					/>
					<div className="brand-name">My Page</div>
				</div>
				<div className="rightMenu">
					<span className="menu-item">Help</span>
					<span className="menu-item"> Login </span>
				</div>
      </div>
		)
	}
}
