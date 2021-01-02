//Imported Modules
import './App.css';
import Contacts from './components/contacts/Contacts';
import Header from './components/layouts/Header';
import AddContact from './components/contacts/AddContact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './Context';

//We wrap the imported provider as a tag around what we intend to return
function App() {
	return (
		<Provider>
			<div className='App'>
				<Header branding='Contact Manager' />
				<div className='container'>
					<AddContact />
					<Contacts />
				</div>
			</div>
		</Provider>
	);
}

export default App;
