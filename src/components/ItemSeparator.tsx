import React from 'react';
import { View } from 'react-native';

const ItemSeparator = () => {
	return (
		<View
			style={{
				display: 'flex',
				width: '90%',
				alignSelf: 'center',
				borderBottomWidth: 1,
				opacity: 0.3,
				marginVertical: 8,
			}}
		/>
	);
};

export default ItemSeparator;
