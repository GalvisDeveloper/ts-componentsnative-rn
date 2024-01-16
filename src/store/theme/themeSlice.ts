import { Theme } from '@react-navigation/native';
import { createSlice } from '@reduxjs/toolkit';

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
			primary: '#5856D6',
			background: 'white',
			text: 'black',
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
		},
		resetThemeDefault: (state) => {
			Object.assign(state.theme, initialState.theme);
		}
	},
});

export const { setTheme, resetThemeDefault } = themeSlice.actions;
