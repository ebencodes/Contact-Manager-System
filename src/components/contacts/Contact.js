import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../Context';

class Contact extends Component {
	state = {
		showContactInfo: false,
	};
	// dispatch(action) = newState
	/**action = {
	 * type: 'DELETE_CONTACT',
	 * payload: 'id'} */

	onDeleteClick = (id, dispatch) => {
		dispatch({
			type: 'DELETE_CONTACT',
			payload: id,
		});
	};

	render() {
		const {
			id,
			name,
			email,
			phone,
		} = this.props.contact;
		const { showContactInfo } = this.state;
		return (
			/**
			 * we need to wrap whatever we are returning around the consumer
			 * tag so as to access the value been got from the context
			 */
			<Consumer>
				{(value) => {
					const { dispatch } = value;
					return (
						<div className='card mb-3'>
							<div className='card-body'>
								<h4>
									{name}{' '}
									<i
										//eventListener to hide/show content of the component (state:true/false)
										onClick={() => {
											this.setState({
												showContactInfo: !this
													.state.showContactInfo,
											});
										}}
										className='fas fa-sort-down'
										style={{
											cursor: 'pointer',
										}}
									></i>{' '}
									<i
										className='fas fa-times'
										style={{
											float: 'right',
											color: 'red',
											cursor: 'pointer',
										}}
										//eventListener to delete a component
										onClick={this.onDeleteClick.bind(
											this,
											id,
											dispatch,
										)}
									></i>
								</h4>
								{showContactInfo ? (
									<ul className='list-group'>
										<li className='list-group-item'>
											Email: {email}
										</li>
										<li className='list-group-item'>
											Phone: {phone}
										</li>
									</ul>
								) : null}
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

//This is used for type-checking the properties being passed into the components
Contact.propTypes = {
	contact: PropTypes.object.isRequired,
};

export default Contact;
