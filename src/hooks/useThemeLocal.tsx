import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { resetThemeDefault, setTheme } from '../store/theme/themeSlice';

const useThemeLocal = () => {
	const { theme } = useSelector((state: RootState) => state.theme);

	const dispatch = useDispatch();

	const changeTheme = () => {
		if (theme.currentTheme === 'light') {
			setDarkTheme();
		} else {
			setLightTheme();
		}
	};

	const setLightTheme = () => {
		dispatch(resetThemeDefault());
	};

	const setDarkTheme = () => {
		dispatch(
			setTheme({
				currentTheme: 'dark',
				dark: true,
				colors: {
					primary: 'white',
					background: 'black',
					card: '#5856D6',
					text: 'white',
					border: 'white',
					notification: 'teal',
				},
			})
		);
	};

	return {
		//states
		theme,

		//functions
		changeTheme,
		setLightTheme,
		setDarkTheme,
	};
};

export default useThemeLocal;
