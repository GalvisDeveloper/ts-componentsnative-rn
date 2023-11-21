import React from 'react';
import { MenuItem } from '../../interfaces/appInterfaces';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface Props {
	menuItem: MenuItem;
}

const FlatListMenuItem = ({ menuItem }: Props) => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate(menuItem.component as never)}>
			<View style={localStyles.container}>
				<View style={localStyles.iconPlusName}>
					<Icon name={menuItem.icon} color='gray' size={23} />
					<Text style={localStyles.itemText}>{menuItem.name} </Text>
				</View>

				<View>
					<Icon name='caret-forward-outline' color='gray' size={23} />
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default FlatListMenuItem;

const localStyles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	itemText: {
		marginLeft: 10,
		fontSize: 20,
	},
	iconPlusName: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});
