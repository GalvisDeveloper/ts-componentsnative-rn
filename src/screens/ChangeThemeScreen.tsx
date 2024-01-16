import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import HeaderTitle from '../components/HeaderTitle';
import { RootState } from '../store/store';
import { resetThemeDefault, setTheme } from '../store/theme/themeSlice';
import { styles } from '../theme/appTheme';
import useThemeLocal from '../hooks/useThemeLocal';

const ChangeThemeScreen = () => {
	const { changeTheme } = useThemeLocal();

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
				onPress={changeTheme}
			>
				<Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>Light / Dark</Text>
			</TouchableOpacity>
		</View>
	);
};

export default ChangeThemeScreen;
