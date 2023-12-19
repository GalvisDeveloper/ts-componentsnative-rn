import { createSlice } from '@reduxjs/toolkit';
import { DarkTheme, Theme, DefaultTheme } from '@react-navigation/native';

interface ThemeState extends Theme {
	currentTheme: 'light' | 'dark';
	// dark: boolean;
}

interface State {
	theme: ThemeState;
}

let initialState: State = {
	theme: {
		currentTheme: 'light',
		dark: false,
		colors: {
			// ...DefaultTheme.colors,
			primary: '#5856D6',
			background: 'white',
			text: 'white',
			border: '#5856D6',
			card: 'white',
			notification: 'teal',
		},
	}
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme: (state, action) => {
			state.theme = {
				...state.theme,
				...action.payload,
			}
		}
	},
});

export const { setTheme } = themeSlice.actions;
