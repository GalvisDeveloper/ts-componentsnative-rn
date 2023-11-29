import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { styles } from '../theme/appTheme';

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
                {
					text: 'Cancel',
					onPress: () => console.log('Cancel2 Pressed'),
					style: 'destructive',
				},
                {
					text: 'Cancel',
					onPress: () => console.log('Cancel3 Pressed'),
					style: 'destructive',
				},
			],
			{
				cancelable: true,
				onDismiss: () => console.log('onDismiss'),
			}
		);
	};

	return (
		<View style={styles.globalMargin}>
			<Text>Alert</Text>

			<Button title='Show Alert' onPress={showAlert} />
		</View>
	);
};

export default AlertScreen;
