import React from 'react';
import './App.scss';
import Settings from './components/Settings';

function App() {
	return (
		<main className="app">
			<div className="app__settings">
				<Settings />
			</div>
		</main>
	);
}

export default App;
