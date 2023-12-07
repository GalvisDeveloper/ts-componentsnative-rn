import React from 'react';
import { Button, Modal, View, Text } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';

const ModalScreen = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	return (
		<View style={styles.globalMargin}>
			<HeaderTitle title='Modal Screen' />

			<Button title='Open Modal' onPress={() => setIsVisible(!isVisible)} />

			<Modal animationType='fade' visible={isVisible} transparent={true}>
				<View
					style={{
						flex: 1,
						backgroundColor: 'rgba(0,0,0,0.3)',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<View
						style={{
							backgroundColor: 'white',
							width: '80%',
							height: '40%',
							justifyContent: 'center',
							alignItems: 'center',
							shadowOffset: {
								width: 0,
								height: 10,
							},
							shadowOpacity: 0.25,
							elevation: 15,
							shadowRadius: 10,
							borderRadius: 5,
						}}
					>
						<HeaderTitle title='Modal' />
						<Text style={{ ...styles.text, marginBottom: 60 }}>Modal Body</Text>
						<Button title='Close' onPress={() => setIsVisible(!isVisible)} />
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default ModalScreen;
