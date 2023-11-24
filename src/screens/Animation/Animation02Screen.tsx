import React from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';
import useFadeAnimation from '../../hooks/useFadeAnimation';
import { colors } from '../../theme/appTheme';

const Animation02Screen = () => {
	const { fadeIn, fadeOut, startMovingAnimation, panResponder, pan } = useFadeAnimation({
		initialOpacity: 0,
		timer: 500,
		initialPosition: -100,
	});

	return (
		<View style={localStyles.container}>
			<Animated.View {...panResponder.panHandlers} style={[pan.getLayout(), localStyles.box]} />

			<View style={{ marginTop: 20, gap: 10, flexDirection: 'row' }}>
				<Button
					title='Fade In'
					onPress={() => {
						fadeIn();
						startMovingAnimation();
					}}
				/>
				<Button title='Fade Out' onPress={fadeOut} />
			</View>
		</View>
	);
};

export default Animation02Screen;

const localStyles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	purpleBox: {
		backgroundColor: colors.secondary,
		width: 150,
		height: 150,
	},
	box: {
		backgroundColor: '#61dafb',
		width: 80,
		height: 80,
		borderRadius: 4,
	},
});
