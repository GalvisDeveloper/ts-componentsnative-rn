import React from 'react';
import { Animated, Button, StyleSheet, Text, View } from 'react-native';
import useFadeAnimation from '../../hooks/useFadeAnimation';
import { colors } from '../../theme/appTheme';

const Animation01Screen = () => {
	const { opacity, fadeIn, fadeOut, position, startMovingAnimation } = useFadeAnimation();

	return (
		<View style={localStyles.container}>
			<Animated.View
				style={{
					...localStyles.purpleBox,
					opacity,
					transform: [
						{
							translateX: position,
						},
					],
				}}
			/>

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

export default Animation01Screen;

const localStyles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	purpleBox: {
		backgroundColor: colors.primary,
		width: 150,
		height: 150,
	},
});
