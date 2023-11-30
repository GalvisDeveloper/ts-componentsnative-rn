import React, { useState } from 'react';
import { colors, styles } from '../theme/appTheme';
import { TextInput, View, StyleSheet, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';

const TextInputScreen = () => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		phone: '',
	});

	const onChange = (text: string, field: string) => {
		setForm({
			...form,
			[field]: text,
		});
	};

	return (
		<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
			<ScrollView>
				<View style={styles.globalMargin}>
					<HeaderTitle title='Text Inputs' color={colors.primary} />
					<TextInput
						style={localStyles.inputStyle}
						placeholder='Type your name'
						value={form.name}
						autoCorrect={true}
						onChangeText={(value) => onChange(value, 'name')}
						autoCapitalize='words'
						// onChangeText={(value) => onChange(value, 'name')}
					/>

					<TextInput
						style={localStyles.inputStyle}
						placeholder='Type your email'
						value={form.email}
						onChangeText={(value) => onChange(value, 'email')}
						keyboardType='email-address'
						keyboardAppearance='dark' // * iOS only
						// autoCorrect={false}
						autoCapitalize='none'
						// onChangeText={(value) => onChange(value, 'name')}
					/>

					<HeaderTitle title={JSON.stringify(form, null, 3)} color={colors.primary} />
					<HeaderTitle title={JSON.stringify(form, null, 3)} color={colors.primary} />
					<TextInput
						style={localStyles.inputStyle}
						placeholder='Type your phone'
						value={form.phone}
						onChangeText={(value) => onChange(value, 'phone')}
						keyboardType='phone-pad'
						// autoCorrect={false}
						// autoCapitalize='words'
						// onChangeText={(value) => onChange(value, 'name')}
					/>
					{/* <Text> {JSON.stringify(form, null, 3)} </Text> */}
				</View>
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
});
