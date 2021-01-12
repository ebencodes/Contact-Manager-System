import React, { Component } from 'react';
import axios from 'axios';
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

		case 'ADD_CONTACT':
			return {
				...state,
				contacts: [
					action.payload,
					...state.contacts,
				],
			};

		case 'UPDATE_CONTACT':
			return {
				...state,
				contacts: state.contacts.map((contact) =>
					contact.id === action.payload.id
						? (contact = action.payload)
						: contact,
				),
			};

		default:
			return state;
	}
};

//Context API can hold the state for small projects
export class Provider extends Component {
	state = {
		contacts: [],
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

	// Using .then
	/**componentDidMount() {
		axios
			.get(
				'https://jsonplaceholder.typicode.com/users',
			)
			.then((result) =>
				this.setState({ contacts: result.data }),
			);
	}**/

	// Using AsynAwait
	async componentDidMount() {
		const result = await axios.get(
			'https://jsonplaceholder.typicode.com/users',
		);
		this.setState({ contacts: result.data });
	}

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
