/**This is an uncontrolled component where we do not use state
 * but pass the input values as refs
 */
import React, { Component } from 'react';

export class AddContact extends Component {
	constructor(props) {
		super(props);

		this.nameInput = React.createRef();
		this.emailInput = React.createRef();
		this.phoneInput = React.createRef();
	}

	onSubmit = (e) => {
		e.preventDefault();
		const contact = {
			name: this.nameInput.current.value,
			email: this.emailInput.current.value,
			phone: this.phoneInput.current.value,
		};
		console.log(contact);
	};

	static defaultProps = {
		name: 'Mary Osele',
		email: 'debbyosele@gmail.com',
		phone: '09064752737',
	};

	render() {
		const { name, email, phone } = this.props;
		return (
			<div>
				<div className='card mb-3'>
					<div className='card-header'>
						Add Contact
					</div>
					<div className='card-body'>
						<form onSubmit={this.onSubmit}>
							<div className='form-group'>
								<label htmlFor='name'>Name</label>
								<input
									className='form-control form-control-lg'
									type='text'
									name='name'
									id='name'
									placeholder='Enter Name...'
									/**value is what would be deplayed on the form whaen it is unmutable*/
									defaultValue={name}
									ref={this.nameInput}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='email'>
									E-mail
								</label>
								<input
									className='form-control form-control-lg'
									type='email'
									name='email'
									id='email'
									placeholder='Enter email address...'
									defaultValue={email}
									ref={this.emailInput}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='phone-number'>
									Phone Number
								</label>
								<input
									className='form-control form-control-lg'
									type='number'
									name='phone'
									id='phone-number'
									placeholder='Enter phone number...'
									defaultValue={phone}
									ref={this.phoneInput}
								/>
							</div>
							<input
								type='submit'
								value='Add Contact'
								className='btn btn-block btn-danger btn-lg'
							/>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default AddContact;
