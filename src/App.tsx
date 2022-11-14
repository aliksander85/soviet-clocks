import { Provider } from 'react-redux';
import store from './store';
import Settings from './components/Settings';
import './App.scss';

function App() {
	return (
		<Provider store={store}>
			<main className="app">
				<div className="app__settings">
					<Settings />
				</div>
			</main>
		</Provider>
	);
}

export default App;
