import React from 'react';
import { Text, View } from 'react-native';
import { colors, styles } from '../theme/appTheme';

import { FlatList } from 'react-native-gesture-handler';
import FlatListMenuItem from '../components/FlatList/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';

const HomeScreen = () => {
	return (
		<View style={styles.globalMargin}>
			<FlatList
				ListHeaderComponent={() => <HeaderTitle title='Menu Options' />}
				data={menuItems}
				renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
				keyExtractor={(item) => item.component}
				ItemSeparatorComponent={ItemSeparator}
			/>
		</View>
	);
};

export default HomeScreen;
