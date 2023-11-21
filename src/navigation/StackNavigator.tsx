import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Animation01Screen from '../screens/Animation/Animation01Screen';
import Animation02Screen from '../screens/Animation/Animation02Screen';

const Stack = createStackNavigator();

const StackNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name='Home' component={HomeScreen} />
			<Stack.Screen name='Animation01Screen' component={Animation01Screen} />
			<Stack.Screen name='Animation02Screen' component={Animation02Screen} />
		</Stack.Navigator>
	);
};

export default StackNavigator;
