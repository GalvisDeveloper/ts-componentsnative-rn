import React from 'react';
import { Text, View } from 'react-native';
import { colors, styles } from '../theme/appTheme';

import { FlatList } from 'react-native-gesture-handler';
import FlatListMenuItem from '../components/FlatList/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import HeaderTitle from '../components/HeaderTitle';

const HomeScreen = () => {
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
				ListHeaderComponent={() => <HeaderTitle title='Menu Options' color={colors.primary} />}
				data={menuItems}
				renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
				keyExtractor={(item) => item.component}
				ItemSeparatorComponent={renderItemSeparator}
			/>
		</View>
	);
};

export default HomeScreen;
