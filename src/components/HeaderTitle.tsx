import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
	title: string;
	color?: string;
	size?: number;
}

const HeaderTitle = ({ title, color, size = 30 }: Props) => {
	return (
		<View style={localStyles.container}>
			<Text style={{ ...styles.title, color, fontSize: size }}>{title}</Text>
		</View>
	);
};

export default HeaderTitle;

const localStyles = StyleSheet.create({
	container: {
		backgroundColor: 'transparent',
	},
});
