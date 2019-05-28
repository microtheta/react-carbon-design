import React from 'react';
import { Accordion, AccordionItem } from 'carbon-components-react';


import './FAQ.scss';

export default class FAQ extends React.Component {
	render() {
		return (
			<div className="FAQ-container">
				<div className="FAQ-title">
					Frequently Asked Questions
				</div>

				<div className="FAQ-questions">

					<Accordion>
						<AccordionItem title="How do I update settings?" >
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
						</AccordionItem>
						<AccordionItem title="How do I refer to this?" >
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</p>
						</AccordionItem>
						<AccordionItem title="Another question goes here?" >

						</AccordionItem>
						<AccordionItem title={<h4>Some more questions?</h4>} >
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</p>
						</AccordionItem>
					</Accordion>


				</div>
			</div>
		)
	}
}
