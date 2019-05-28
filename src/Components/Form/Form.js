import React from 'react';
import {
	Form,
	FormGroup,
	Checkbox,
	Toggle,
	FileUploader,
	RadioButtonGroup,
	RadioButton,
	Search,
	Select,
	SelectItem,
	TextInput,
	TextArea,
	Button
} from 'carbon-components-react';

import './Form.scss';


export default class FormDemo extends React.Component {
	render() {
		return (
			<div className="form-container">
				<Form>
					<FormGroup className="form-item" legendText="Checkbox heading">
						<Checkbox
							defaultChecked
							className="some-class"
							labelText="Checkbox label"
							id="checkbox-0"
						/>
						<Checkbox className="some-class" labelText="Checkbox label" id="checkbox-1" />
						<Checkbox
							disabled
							className="some-class"
							labelText="Checkbox label"
							id="checkbox-2"
						/>
					</FormGroup>
					<FormGroup className="form-item" legendText="Toggle heading">
						<Toggle className="some-class" id="toggle-1" />
						<Toggle disabled className="some-class" id="toggle-2" />
					</FormGroup>
					<FormGroup className="form-item" legendText="File Uploader">
						<FileUploader
							buttonLabel="Add files"
							className="some-class"
							id="file-1"
							labelDescription="Choose Files..."
						/>
					</FormGroup>
					<FormGroup className="some-class" legendText="Radio Button heading">
						<RadioButtonGroup name="radio-button-group" defaultSelected="default-selected">
							<RadioButton
								value="standard"
								id="radio-1"
								labelText="Standard Radio Button"
								className="some-class"
							/>
							<RadioButton
								value="default-selected"
								labelText="Default Selected Radio Button"
								id="radio-2"
								className="some-class"
							/>
							<RadioButton
								value="blue"
								labelText="Standard Radio Button"
								id="radio-3"
								className="some-class"
							/>
							<RadioButton
								value="disabled"
								labelText="Disabled Radio Button"
								id="radio-4"
								disabled
								className="some-class"
							/>
						</RadioButtonGroup>
					</FormGroup>
					<FormGroup className="some-class" legendText="Search">
						<Search
							className="some-class"
							id="search-1"
							labelText="Search"
							placeHolderText="Search"
						/>
					</FormGroup>
					<Select className="some-class" id="select-1" defaultValue="placeholder-item">
						<SelectItem
							disabled
							hidden
							value="placeholder-item"
							text="Choose an option"
						/>
						<SelectItem value="option-1" text="Option 1" />
						<SelectItem value="option-2" text="Option 2" />
						<SelectItem value="option-3" text="Option 3" />
					</Select>
					<TextInput
						className="some-class"
						id="test21"
						labelText="Text Input label"
						placeholder="Placeholder text"
					/>
					<TextInput
						type="password"
						required
						pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
						className="some-class"
						id="test3"
						labelText="Password"
					/>
					<TextArea
						labelText="Text Area label"
						className="some-class"
						placeholder="Placeholder text"
						id="test5"
					/>
					<Button type="submit" className="some-class">
						Submit
					</Button>
				</Form>
			</div>
		)
	}
}
