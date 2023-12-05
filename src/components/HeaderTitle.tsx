import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
	title: string;
	color?: string;
	size?: number;
}

const HeaderTitle = ({ title, color, size = 30 }: Props) => {
	return (
		<View style={{ marginTop: 20 }}>
			<Text style={{ ...styles.title, color, fontSize: size }}>{title}</Text>
		</View>
	);
};

export default HeaderTitle;
