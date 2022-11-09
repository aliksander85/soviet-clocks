import React from 'react';
import './App.scss';
import Clocks from './components/Clocks';

function App() {
	return (
		<main className="app">
			<div className="app__clocks">
				<Clocks />
			</div>
		</main>
	);
}

export default App;
