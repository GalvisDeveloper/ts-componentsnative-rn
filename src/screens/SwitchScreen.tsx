import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

const SwitchScreen = () => {
	const [state, setState] = useState({
		isActive: true,
		isHungry: false,
		isHappy: true,
	});

	const { isActive, isHungry, isHappy } = state;

	const { colors: themeColor } = useTheme();

	const onChange = (isEnabled: boolean, field: keyof typeof state) => {
		setState({
			...state,
			[field]: isEnabled,
		});
	};

	return (
		<View style={styles.globalMargin}>
			<HeaderTitle title='Switchers' />

			<View style={localStyles.switchRow}>
				<Text style={{ ...localStyles.switchText, color: themeColor.primary }}>isActive</Text>
				<CustomSwitch isOn={isActive} onChange={(e) => onChange(e, 'isActive')} />
			</View>

			<View style={localStyles.switchRow}>
				<Text style={{ ...localStyles.switchText, color: themeColor.primary }}>isHungry</Text>
				<CustomSwitch isOn={isHungry} onChange={(e) => onChange(e, 'isHungry')} />
			</View>

			<View style={localStyles.switchRow}>
				<Text style={{ ...localStyles.switchText, color: themeColor.primary }}>isHappy</Text>
				<CustomSwitch isOn={isHappy} onChange={(e) => onChange(e, 'isHappy')} />
			</View>

			<Text style={localStyles.switchText}>{JSON.stringify(state, null, 5)}</Text>
		</View>
	);
};

export default SwitchScreen;

const localStyles = StyleSheet.create({
	switchText: {
		fontSize: 25,
	},
	switchRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 10,
	},
});
