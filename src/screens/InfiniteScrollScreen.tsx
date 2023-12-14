import React from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { colors } from '../theme/appTheme';
import FadeInImage from '../components/FadeInImage';

const InfiniteScrollScreen = () => {
	const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

	const loadMore = () => {
		// largest way
		// const newArray: number[] = [];
		// for (let i = 0; i < 5; i++) {
		// 	newArray[i] = numbers.length + i;
		// }
		// setNumbers([...numbers, ...newArray]);

		// shortest way
		setTimeout(() => {
			setNumbers((prevNumbers) => [...prevNumbers, ...Array.from({ length: 5 }, (_, index) => prevNumbers.length + index)]);
		}, 300);
	};

	const renderItem = (item: number) => {
		return <FadeInImage uri={`https://picsum.photos/id/${item}/500/400`} style={{ width: '100%', borderRadius: 30 }} />;
	};

	return (
		<View style={{ flex: 1, backgroundColor: 'red' }}>
			<FlatList
				data={numbers}
				renderItem={({ item }) => renderItem(item)}
				keyExtractor={(item) => item.toString()}
				ListHeaderComponent={<HeaderTitle title='Infinite Scroll' />}
				ListFooterComponent={() => (
					<View style={{ height: 150, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
						<ActivityIndicator size={25} color={colors.primary} />
					</View>
				)}
				onEndReached={loadMore}
				onEndReachedThreshold={0.1}
			/>
		</View>
	);
};

export default InfiniteScrollScreen;

const localStyles = StyleSheet.create({
	textItem: {
		backgroundColor: 'green',
		height: 150,
	},
});
