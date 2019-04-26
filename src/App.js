import React from 'react';

import Home from './views/Home';

import StoreContext from 'storeon/react/context';
import { store } from './store';

function App() {
	return (
		<StoreContext.Provider value={store}>
			<div className='container'>
				<Home />
			</div>
		</StoreContext.Provider>
	);
}

export default App;
