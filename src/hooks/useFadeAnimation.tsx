import React, { useRef } from 'react';
import { Animated } from 'react-native';

interface Props {
	initialOpacity?: number;
	timer?: number;
}

const useFadeAnimation = ({ initialOpacity = 0.5, timer }: Props) => {
	const opacity = useRef(new Animated.Value(initialOpacity)).current;

	const fadeIn = (callback?: Function) => {
		Animated.timing(opacity, {
			toValue: 1,
			duration: timer,
			useNativeDriver: true,
		}).start(() => callback && callback());
	};

	const fadeOut = () => {
		Animated.timing(opacity, {
			toValue: initialOpacity,
			duration: timer,
			useNativeDriver: true,
		}).start();
	};

	return {
		// constants - states
		opacity,

		// functions
		fadeIn,
		fadeOut,
	};
};

export default useFadeAnimation;
