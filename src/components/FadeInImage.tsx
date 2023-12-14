import React, { useState } from 'react';
import { ActivityIndicator, Animated, StyleProp, View, ViewStyle } from 'react-native';
import useFadeAnimation from '../hooks/useFadeAnimation';
import { colors } from './../theme/appTheme';

interface Props {
	uri: string;
	style: StyleProp<ViewStyle> | any;
}

const FadeInImage = ({ uri, style }: Props) => {
	const { opacity, fadeIn } = useFadeAnimation({ initialOpacity: 0.5, timer: 300 });

	const [isLoading, setIsLoading] = useState(true);

	const finishLoading = () => {
		setIsLoading(false);
		fadeIn();
	};

	return (
		<View
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{isLoading && <ActivityIndicator style={{ position: 'absolute' }} size={35} color={colors.primary} />}

			<Animated.Image
				source={{ uri }}
				style={{
					...style,
					width: '100%',
					height: 400,
					opacity,
				}}
				onLoadEnd={finishLoading}
			/>
		</View>
	);
};

export default FadeInImage;
