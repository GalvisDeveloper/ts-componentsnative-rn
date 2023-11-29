import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { colors, styles } from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';
import CustomSwitch from '../components/CustomSwitch';

const SwitchScreen = () => {
	const [state, setState] = useState({
		isActive: true,
		isHungry: false,
		isHappy: true,
	});

	const { isActive, isHungry, isHappy } = state;

	const onChange = (isEnabled: boolean, field: keyof typeof state) => {
		setState({
			...state,
			[field]: isEnabled,
		});
	};

	return (
		<View style={styles.globalMargin}>
			<HeaderTitle title='Switchers' color={colors.primary} />

			<View style={localStyles.switchRow}>
				<Text style={localStyles.switchText}>isActive</Text>
				<CustomSwitch isOn={isActive} onChange={(e) => onChange(e, 'isActive')} />
			</View>

			<View style={localStyles.switchRow}>
				<Text style={localStyles.switchText}>isHungry</Text>
				<CustomSwitch isOn={isHungry} onChange={(e) => onChange(e, 'isHungry')} />
			</View>

			<View style={localStyles.switchRow}>
				<Text style={localStyles.switchText}>isHappy</Text>
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
