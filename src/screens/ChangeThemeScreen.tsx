import React from 'react';
import { Text, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import store, { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../store/theme/themeSlice';

const ChangeThemeScreen = () => {
	const { theme } = useSelector((state: RootState) => state.theme);

	const dispatch = useDispatch();
	console.log(theme);

	const updateTheme = (theme: any) => {
		dispatch(setTheme(theme));
	};

	return (
		<View style={styles.globalMargin}>
			<HeaderTitle title='Change Theme' />

			<TouchableOpacity
				style={{
					width: 150,
					height: 50,
					borderRadius: 20,
					backgroundColor: '#5856D6',
					justifyContent: 'center',
				}}
				onPress={() =>
					updateTheme({
						dark: true,
						colors: {
							primary: '#5856D6',
							background: 'black',
							card: '#5856D6',
							text: 'white',
							border: 'white',
							notification: 'teal',
						},
					})
				}
			>
				<Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>Light / Dark</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ChangeThemeScreen;
