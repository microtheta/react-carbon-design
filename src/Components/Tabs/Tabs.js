import React from 'react';
import { Tabs, Tab } from 'carbon-components-react';
import Form from '../Form/Form';

import './Tabs.scss';


export default class TabsDemo extends React.Component {

	render() {
		return (
			<div className="tabs-container">
				<Tabs
					className="some-class"
					selected={0}
					tabContentClassName="tab-content"
				>
					<Tab label="Tab label 1">
						<div className="some-content" style={{ paddingLeft: 16 }}>
							<Form />
						</div>
					</Tab>
					<Tab label="Tab label 2">
						<div className="some-content" style={{ paddingLeft: 16 }}>
							Content for second tab goes here.
						</div>
					</Tab>
					<Tab label="Tab label 3">
						<div className="some-content" style={{ paddingLeft: 16 }}>
							Content for third tab goes here.
						</div>
					</Tab>
				</Tabs>
			</div>
		)
	}
}
