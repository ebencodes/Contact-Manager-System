import React, { Component } from 'react';
const Context = React.createContext();

/**The reducer function accepts the current state and action('DELETE_CONTACT') and returns the filtered state
 * The id to be filtered out is also passed into from the action as payload
 */
const reducer = (state, action) => {
	switch (action.type) {
		case 'DELETE_CONTACT':
			return {
				...state,
				contacts: state.contacts.filter(
					(contact) =>
						contact.id !== action.payload,
				),
			};

		case 'ADD-CONTACT':
			return {
				...state,
				contact: [
					action.payload,
					...state.contacts,
				],
			};

		default:
			return state;
	}
};

//Context API can hold the state for small projects
export class Provider extends Component {
	state = {
		contacts: [
			{
				id: 1,
				name: 'Eben Osele',
				email: 'ebenosele@gmail.com',
				phone: '09064752627',
			},
			{
				id: 2,
				name: 'Blessing Osele',
				email: 'blessingosele@gmail.com',
				phone: '09064637376',
			},
			{
				id: 3,
				name: 'Debby Osele',
				email: 'debbyosele@gmail.com',
				phone: '09064752737',
			},
			{
				id: 4,
				name: 'Mary Osele',
				email: 'debbyosele@gmail.com',
				phone: '09064752737',
			},
		],
		/**The dispatch function accepts the action parameter which is
		 * passed into the reducer function. The dispatch can be accessed
		 *  whereever the state can be accessed. The dispatch function is
		 * used to mutate the state.
		 */
		dispatch: (action) =>
			this.setState((state) =>
				reducer(state, action),
			),
	};

	// This gives off a value that holds the state. (value = {this.state})
	render() {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export default Provider;
export const Consumer = Context.Consumer;
