import { Provider } from 'react-redux';
import store from './store';
import Clocks from './components/Clocks';
import './App.scss';

function App() {
	return (
		<Provider store={store}>
			<main className="app">
				<div className="app__settings">
					<Clocks />
				</div>
			</main>
		</Provider>
	);
}

export default App;
