import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
	title: string;
	color?: string;
}

const HeaderTitle = ({ title, color }: Props) => {
	return (
		<View style={{ marginTop: 20 }}>
			<Text style={{ ...styles.title, color }}>{title}</Text>
		</View>
	);
};

export default HeaderTitle;
