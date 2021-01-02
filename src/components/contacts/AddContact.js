import React, { Component } from 'react';

export class AddContact extends Component {
	state = {
		id: 1,
		name: '',
		email: '',
		phone: '',
	};

	onSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
	};

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
		const { name, email, phone } = this.state;
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
									value={name}
									onChange={this.onChange}
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
									value={email}
									onChange={this.onChange}
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
									value={phone}
									onChange={this.onChange}
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
