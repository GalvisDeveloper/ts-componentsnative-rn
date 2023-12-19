import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import StackNavigator from './src/navigation/StackNavigator';
import store from './src/store/store';

const App = () => {
	return (
		<Provider store={store}>
			<StackNavigator />
		</Provider>
	);
};

export default App;
