import { React } from 'react';
import Name from './components/name';
import './App.scss';
import Age from './components/age';
import Gender from './components/gender';
import MaritalStatus from './components/marital-status';
import Add from './components/add';

const App = (context) =>
	<div className="App" role="app">
		{ Name(context) }
		{ Age(context) }
		{ Gender(context) }
		{ MaritalStatus(context) }
		{ Add(context) }
	</div>;

export default App;
