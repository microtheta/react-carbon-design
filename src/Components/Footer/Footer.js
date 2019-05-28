import React from 'react';
import { ModalWrapper, TextInput } from 'carbon-components-react';

import './Footer.scss';

export default class FooterDemo extends React.Component {
	render() {
		return (
			<div className="footer-container">
				<div className="subscribe-btn-container">
					<ModalWrapper
						id="transactional-passive-modal"
						className="some-class"
						handleSubmit={() => false}
						passiveModal={false}
						danger={false}
						buttonTriggerText="Subscribe"
						modalLabel="Daily updates"
						modalHeading="Subscribe"
						shouldCloseAfterSubmit
					>
						<p className="bx--modal-content__text">
							To subscribe to this website, please enter your email address here. We will send updates occasionally.
					</p>
						<div className="bx--modal-content__text-input">
							<TextInput
								labelText=""
								className="width-100"
								id="test2"
								placeholder="Email Address"
							/>
						</div>
					</ModalWrapper>
				</div>
				<div className="footer-text">
					Modal example!<br/>
					Something here to give the footer a purpose!
				</div>
			</div>
		)
	}
}
