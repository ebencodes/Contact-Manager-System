import React, { Component } from 'react';
import { Consumer } from '../../Context';
import axios from 'axios';
//import * as uuid from 'uuid';
import TextInputGroup from '../layouts/TextInputGroup';

export class AddContact extends Component {
	state = {
		name: '',
		email: '',
		phone: '',
		errors: {},
	};

	onSubmit = async (dispatch, e) => {
		e.preventDefault();

		const { name, email, phone } = this.state;

		//Check for error
		if (name === '') {
			this.setState({
				errors: { name: 'Name is required' },
			});
			return;
		}

		if (email === '') {
			this.setState({
				errors: { email: 'Email is required' },
			});
			return;
		}

		if (phone === '') {
			this.setState({
				errors: { phone: 'Phone is required' },
			});
			return;
		}

		const newContact = {
			//id: uuid.v1(),
			name,
			email,
			phone,
		};

		//using .then
		/**axios
			.post(
				'https://jsonplaceholder.typicode.com/users',
				newContact,
			)
			.then((result) =>
				dispatch({
					type: 'ADD_CONTACT',
					payload: result.data,
				}),
			);**/

		//using AsyncAwait
		const result = await axios.post(
			'https://jsonplaceholder.typicode.com/users',
			newContact,
		);
		dispatch({
			type: 'ADD_CONTACT',
			payload: result.data,
		});

		//clear state after clicking submit
		this.setState({
			name: '',
			email: '',
			phone: '',
			errors: {},
		});

		//To go back to the home page after adding a contact
		this.props.history.push('/');
	};

	/**	This function connects the input values to the state. 
	The state is set immediately this function is invoked**/
	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
		const {
			name,
			email,
			phone,
			errors,
		} = this.state;
		return (
			<Consumer>
				{(value) => {
					const { dispatch } = value;
					return (
						<div>
							<div className='card mb-3'>
								<div className='card-header'>
									Add Contact
								</div>
								<div className='card-body'>
									<form
										onSubmit={this.onSubmit.bind(
											this,
											dispatch,
										)}
									>
										<TextInputGroup
											label='Name'
											value={name}
											type='text'
											name='name'
											placeholder='Enter Name...'
											onChange={this.onChange}
											error={errors.name}
										/>
										<TextInputGroup
											label='Email'
											value={email}
											type='email'
											name='email'
											placeholder='Enter email address...'
											onChange={this.onChange}
											error={errors.email}
										/>
										<TextInputGroup
											label='Phone Number'
											value={phone}
											type='text'
											name='phone'
											placeholder='Enter phone number...'
											onChange={this.onChange}
											error={errors.phone}
										/>
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
				}}
			</Consumer>
		);
	}
}

export default AddContact;
