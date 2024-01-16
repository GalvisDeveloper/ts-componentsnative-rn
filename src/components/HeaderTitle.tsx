import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface Props {
	title: string;
	color?: string;
	size?: number;
}

const HeaderTitle = ({ title, color, size = 30 }: Props) => {
	const { theme } = useSelector((state: RootState) => state.theme);

	return (
		<View style={localStyles.container}>
			<Text style={{ ...styles.title, color: color || theme.colors.primary, fontSize: size }}>{title}</Text>
		</View>
	);
};

export default HeaderTitle;

const localStyles = StyleSheet.create({
	container: {
		backgroundColor: 'transparent',
	},
});
