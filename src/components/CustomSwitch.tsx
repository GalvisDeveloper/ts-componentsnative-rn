import React, { useState } from 'react';
import { Switch } from 'react-native';
import { colors } from '../theme/appTheme';

interface Props {
	isOn: boolean;
	onChange: (isEnabled: boolean) => void;
}

const CustomSwitch = ({ isOn, onChange }: Props) => {
	const [isEnabled, setIsEnabled] = useState(isOn);

	const toggleSwitch = () => {
		setIsEnabled((previousState) => !previousState);
		onChange(!isEnabled);
	};

	return (
		<Switch
			trackColor={{ false: colors.gray, true: colors.primary }}
			thumbColor={isEnabled ? colors.white : colors.primary}
			/* ios_backgroundColor='#3e3e3e' */ // se ve con mucha opacidad
			onValueChange={toggleSwitch}
			value={isEnabled}
		/>
	);
};

export default CustomSwitch;
