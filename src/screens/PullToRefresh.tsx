import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { colors, styles } from '../theme/appTheme';
import { RefreshControl } from 'react-native-gesture-handler';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PullToRefresh = () => {
	const { top } = useSafeAreaInsets();

	const [refreshing, setRefreshing] = useState(false);

	const [data, setData] = useState<string>('');

	const onRefresh = () => {
		setRefreshing(true);
		setTimeout(() => {
			console.log('Terminamos');
			setRefreshing(false);
			setData('Hello world');
		}, 3500);
	};

	return (
		<ScrollView
			style={{
				marginTop: refreshing ? top : 0,
			}}
			refreshControl={
				<RefreshControl
					refreshing={refreshing}
					onRefresh={onRefresh}
					progressViewOffset={10}
					progressBackgroundColor={colors.primary} // * Android only
					colors={[colors.white, colors.secondary, colors.yellow]} // * Android only
					style={{ backgroundColor: colors.primary }} // * iOS only
					tintColor='white' // * iOS only
					title='Refreshing' // * iOS only
					titleColor={colors.white} // * iOS only
				/>
			}
		>
			<View style={styles.globalMargin}>
				<HeaderTitle title='Pull To Refresh' color={colors.primary} />

				{data && <Text>{data}</Text>}
			</View>
		</ScrollView>
	);
};

export default PullToRefresh;
