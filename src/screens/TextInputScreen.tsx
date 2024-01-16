import React from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import CustomSwitch from '../components/CustomSwitch';
import HeaderTitle from '../components/HeaderTitle';
import useForm from '../hooks/useForm';
import { colors, styles } from '../theme/appTheme';
import { Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

const TextInputScreen = () => {
	const { fields, onChange, name, email, phone, isSubscribed } = useForm({
		name: '',
		email: '',
		phone: '',
		isSubscribed: false,
	});

	const { colors: themeColor } = useTheme();

	return (
		<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
			<ScrollView>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={styles.globalMargin}>
						<HeaderTitle title='Text Inputs' />
						<TextInput
							style={{ ...localStyles.inputStyle, color: themeColor.text }}
							placeholder='Type your name'
							value={name}
							autoCorrect={true}
							onChangeText={(value) => onChange(value, 'name')}
							autoCapitalize='words'
							placeholderTextColor={themeColor.text}
						/>

						<TextInput
							style={{ ...localStyles.inputStyle, color: themeColor.text }}
							placeholder='Type your email'
							value={email}
							onChangeText={(value) => onChange(value, 'email')}
							keyboardType='email-address'
							keyboardAppearance='dark' // * iOS only
							autoCapitalize='none'
						/>

						<View style={localStyles.subscribeContainer}>
							<Text style={{ ...styles.text, color: themeColor.text }}>Is subscribed?: </Text>
							<CustomSwitch isOn={isSubscribed} onChange={(bool) => onChange(bool, 'isSubscribed')} />
						</View>

						<TextInput
							style={{ ...localStyles.inputStyle, color: themeColor.text }}
							placeholder='Type your phone'
							value={phone}
							onChangeText={(value) => onChange(value, 'phone')}
							keyboardType='phone-pad'
						/>
						<HeaderTitle title={JSON.stringify(fields, null, 3)} />
					</View>
				</TouchableWithoutFeedback>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

export default TextInputScreen;

const localStyles = StyleSheet.create({
	inputStyle: {
		borderWidth: 1,
		height: 50,
		paddingHorizontal: 10,
		borderRadius: 10,
		marginVertical: 10,
		borderColor: colors.primary,
	},
	subscribeContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
});
