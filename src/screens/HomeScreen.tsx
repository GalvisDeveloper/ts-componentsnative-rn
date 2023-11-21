import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

import { FlatList } from 'react-native-gesture-handler';
import FlatListMenuItem from '../components/FlatList/FlatListMenuItem';

const DATA = [
	{
		name: 'Animation 101',
		icon: 'cube-outline',
		component: 'Animation01Screen',
	},
	{
		name: 'Animation 102',
		icon: 'bar-chart-outline',
		component: 'Animation02Screen',
	},
	{
		name: 'Animation 103',
		icon: 'cloud-circle-outline',
		component: 'Animation03Screen',
	},
];

const HomeScreen = () => {
	const renderListHeader = () => {
		return (
			<View>
				<Text style={styles.title}>Menu Options</Text>
			</View>
		);
	};

	const renderItemSeparator = () => {
		return (
			<View
				style={{
					display: 'flex',
					width: '90%',
					alignSelf: 'center',
					borderBottomWidth: 1,
					opacity: 0.3,
					marginVertical: 8,
				}}
			/>
		);
	};

	return (
		<View style={styles.globalMargin}>
			<FlatList
				ListHeaderComponent={renderListHeader}
				data={DATA}
				renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
				keyExtractor={(item) => item.component}
				ItemSeparatorComponent={renderItemSeparator}
			/>
		</View>
	);
};

export default HomeScreen;
