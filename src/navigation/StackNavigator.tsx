import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect } from 'react';
import { AppState, Appearance } from 'react-native';
import SlidesScreen from '../components/SlidesScreen';
import useThemeLocal from '../hooks/useThemeLocal';
import AlertScreen from '../screens/AlertScreen';
import Animation01Screen from '../screens/Animation/Animation01Screen';
import Animation02Screen from '../screens/Animation/Animation02Screen';
import ChangeThemeScreen from '../screens/ChangeThemeScreen';
import HomeScreen from '../screens/HomeScreen';
import InfiniteScrollScreen from '../screens/InfiniteScrollScreen';
import ModalScreen from '../screens/ModalScreen';
import PullToRefresh from '../screens/PullToRefresh';
import SectionListScreen from '../screens/SectionListScreen';
import SwitchScreen from '../screens/SwitchScreen';
import TextInputScreen from '../screens/TextInputScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
	const { theme, setLightTheme, setDarkTheme } = useThemeLocal();

	useEffect(() => {
		AppState.addEventListener('change', (status) => {
			if (status === 'active') {
				Appearance.getColorScheme() === 'light' ? setLightTheme() : setDarkTheme();
			}
		});
	}, []);

	return (
		<NavigationContainer theme={theme}>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name='Home' component={HomeScreen} />
				<Stack.Screen name='Animation01Screen' component={Animation01Screen} />
				<Stack.Screen name='Animation02Screen' component={Animation02Screen} />
				<Stack.Screen name='SwitchScreen' component={SwitchScreen} />
				<Stack.Screen name='AlertScreen' component={AlertScreen} />
				<Stack.Screen name='TextInputScreen' component={TextInputScreen} />
				<Stack.Screen name='PullToRefresh' component={PullToRefresh} />
				<Stack.Screen name='SectionListScreen' component={SectionListScreen} />
				<Stack.Screen name='ModalScreen' component={ModalScreen} />
				<Stack.Screen name='InfiniteScrollScreen' component={InfiniteScrollScreen} />
				<Stack.Screen name='SlidesScreen' component={SlidesScreen} />
				<Stack.Screen name='ChangeThemeScreen' component={ChangeThemeScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default StackNavigator;
