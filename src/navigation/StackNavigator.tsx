import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Animation01Screen from '../screens/Animation/Animation01Screen';
import Animation02Screen from '../screens/Animation/Animation02Screen';
import SwitchScreen from '../screens/SwitchScreen';
import AlertScreen from '../screens/AlertScreen';
import TextInputScreen from '../screens/TextInputScreen';
import PullToRefresh from '../screens/PullToRefresh';
import SectionListScreen from '../screens/SectionListScreen';
import ModalScreen from '../screens/ModalScreen';
import InfiniteScrollScreen from '../screens/InfiniteScrollScreen';
import SlidesScreen from '../components/SlidesScreen';
import ChangeThemeScreen from '../screens/ChangeThemeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Stack = createStackNavigator();

const StackNavigator = () => {
	const { theme } = useSelector((state: RootState) => state.theme);
	
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
