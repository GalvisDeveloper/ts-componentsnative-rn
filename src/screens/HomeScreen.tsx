import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

import { FlatList } from 'react-native-gesture-handler';

interface MenuItem {
	name: string;
	icon: string;
	components: string;
}

const DATA = [
	{
		name: 'Animation 101',
		icon: 'cube-outline',
		components: 'Animation101Screen',
	},
	{
		name: 'Animation 102',
		icon: 'cube-outline',
		components: 'Animation102Screen',
	},
	{
		name: 'Animation 103',
		icon: 'cube-outline',
		components: 'Animation103Screen',
	},
];

const HomeScreen = () => {
	const renderMenuItem = (menuItem: MenuItem) => {
		return (
			<View>
				<Text>
					{menuItem.name} - {menuItem.icon}
				</Text>
			</View>
		);
	};

	return (
		<View style={styles.globalMargin}>
			<FlatList data={DATA} renderItem={({ item }) => renderMenuItem(item)} keyExtractor={(item) => item.components} />
		</View>
	);
};

export default HomeScreen;
