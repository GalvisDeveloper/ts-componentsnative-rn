import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';

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
		setNumbers((prevNumbers) => [...prevNumbers, ...Array.from({ length: 5 }, (_, index) => prevNumbers.length + index)]);
	};

	const renderItem = (item: number) => {
		return <Text style={localStyles.textItem}>{item}</Text>;
	};

	return (
		<View style={{ flex: 1, backgroundColor: 'red' }}>
			<FlatList
				data={numbers}
				renderItem={({ item }) => renderItem(item)}
				keyExtractor={(item) => item.toString()}
				ListHeaderComponent={<HeaderTitle title='Infinite Scroll' />}
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
