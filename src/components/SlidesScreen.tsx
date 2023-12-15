import React, { useEffect, useState } from 'react';
import { Animated, Dimensions, Image, ImageSourcePropType, SafeAreaView, Text, View, useWindowDimensions } from 'react-native';
import { colors, styles } from '../theme/appTheme';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import useFadeAnimation from '../hooks/useFadeAnimation';

interface Slide {
	title: string;
	desc: string;
	img: ImageSourcePropType;
}

const items: Slide[] = [
	{
		title: 'Titulo 1',
		desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
		img: require('../assets/slide-1.png'),
	},
	{
		title: 'Titulo 2',
		desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
		img: require('../assets/slide-2.png'),
	},
	{
		title: 'Titulo 3',
		desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
		img: require('../assets/slide-3.png'),
	},
];

const SlidesScreen = () => {
	const { width: screenX, height: screenY } = useWindowDimensions();

	const [activeIndex, setActiveIndex] = useState(0);

	const navigation = useNavigation();

	const { fadeIn, opacity, fadeOut } = useFadeAnimation({ timer: 500 });

	useEffect(() => {
		if (activeIndex === items.length - 1) fadeIn();

		return () => {
			fadeOut();
		};
	}, [activeIndex]);

	const renderItem = (item: Slide) => {
		return (
			<View
				style={{
					borderRadius: 5,
					padding: 40,
				}}
			>
				<Image source={item.img} style={{ width: 350, height: 400, resizeMode: 'center' }} />
				<Text style={{ ...styles.title, color: colors.primary }}>{item.title}</Text>
				<Text style={styles.text}>{item.desc}</Text>
			</View>
		);
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Carousel
				// ref={(c) => {
				// 	this._carousel = c;
				// }}
				data={items}
				renderItem={({ item }: { item: Slide }) => renderItem(item)}
				sliderWidth={screenX}
				itemWidth={screenX}
				layout='default'
				onSnapToItem={(index) => setActiveIndex(index)}
			/>

			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					marginHorizontal: 20,
					alignItems: 'center',
				}}
			>
				<Pagination
					dotsLength={items.length}
					activeDotIndex={activeIndex}
					dotStyle={{
						width: 10,
						height: 10,
						borderRadius: 10,
						backgroundColor: colors.primary,
					}}
				/>

				<Animated.View style={{ opacity }}>
					<TouchableOpacity
						style={{
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
							height: 50,
							width: 150,
							borderRadius: 10,
							backgroundColor: colors.primary,
						}}
						activeOpacity={0.8}
						onPress={() => navigation.goBack()}
					>
						<Text style={{ fontSize: 25, color: 'white' }}>Join</Text>
						<Icon name='arrow-forward-outline' size={30} color='white' />
					</TouchableOpacity>
				</Animated.View>
			</View>
		</SafeAreaView>
	);
};

export default SlidesScreen;
