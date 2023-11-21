import React from 'react';
import { Animated, Button, StyleSheet, Text, View } from 'react-native';
import useFadeAnimation from '../../hooks/useFadeAnimation';
import { colors } from '../../theme/appTheme';

const Animation02Screen = () => {
	const { opacity, fadeIn, fadeOut } = useFadeAnimation({ initialOpacity: 0.5, timer: 300 });

	return (
		<View style={localStyles.ct}>
			<Animated.View style={{ ...localStyles.purpleBox, opacity }} />

			<View style={{ marginTop: 20, gap: 10, flexDirection: 'row' }}>
				<Button title='Fade In' onPress={() => fadeIn()} />
				<Button title='Fade Out' onPress={fadeOut} />
			</View>
		</View>
	);
};

export default Animation02Screen;

const localStyles = StyleSheet.create({
	ct: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	purpleBox: {
		backgroundColor: colors.secondary,
		width: 150,
		height: 150,
	},
});
