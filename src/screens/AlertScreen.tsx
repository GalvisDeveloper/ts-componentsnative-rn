import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { styles } from '../theme/appTheme';

import prompt from 'react-native-prompt-android';

interface Props {
	alertTitle?: string;
	alertMessage?: string;
}

const AlertScreen = ({ alertTitle, alertMessage }: Props) => {
	const showAlert = () => {
		Alert.alert(
			alertTitle || 'Alert Title not defined',
			alertMessage || 'Alert Message not defined',
			[
				{ text: 'OK', onPress: () => console.log('OK Pressed') },
				{
					text: 'Cancel',
					onPress: () => console.log('Cancel1 Pressed'),
					style: 'destructive',
				},
			],
			{
				cancelable: true,
				onDismiss: () => console.log('onDismiss'),
			}
		);
	};

	const showPrompt = () => {
		// * IOS
		// Alert.prompt(
		// 	'Are you sure?',
		// 	'This action cannot be undone',
		// 	(text) => console.log('You entered: ' + text),
		// 	'plain-text',
		// 	'Hello World'
		// );
		prompt(
			'Enter password',
			'Enter your password to claim your $1.5B in lottery winnings',
			[
				{ text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
				{ text: 'OK', onPress: (password) => console.log('OK Pressed, password: ' + password) },
			],
			{
				type: 'secure-text',
				cancelable: false,
				defaultValue: 'test',
				placeholder: 'placeholder',
			}
		);
	};

	return (
		<View style={styles.globalMargin}>
			<Text>Alert</Text>

			<Button title='Show Alert' onPress={showAlert} />
			<Button title='Show Prompt' onPress={showPrompt} />
		</View>
	);
};

export default AlertScreen;
