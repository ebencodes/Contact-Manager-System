import React, { Component } from 'react';
import Contact from './Contact';

// We import the consumer when we intend to use the state.
import { Consumer } from '../../Context';

export class Contacts extends Component {
	render() {
		return (
			/**To access anything from the context Api, we need to wrap
			 * what ever we intend to return with the consumer tag.
			 * note that the state is currently been got from the context*/
			<Consumer>
				{(value) => {
					const { contacts } = value;
					return (
						/**React.Fragment is used to take out unnessary element. A div in here is not need */
						<React.Fragment>
							<h1 className='display-4 mb-4'>
								<span className='text-danger'>
									Contact
								</span>{' '}
								List
							</h1>
							{contacts.map((contact) => (
								<Contact
									key={contact.id}
									contact={contact}
								/>
							))}
						</React.Fragment>
					);
				}}
			</Consumer>
		);
	}
}

export default Contacts;
