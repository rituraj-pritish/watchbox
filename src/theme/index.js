const SIZE_UNIT = 1

const theme = {
	spacing: (factor = 1) => `${factor * SIZE_UNIT}rem`,
	borderRadius: '5px',
	maxWidth: '1200px',

	space: [0, 4, 8, 16, 24, 32],
	fontSizes: [0, 12.8, 16, 20, 25, 31.25],

	colors: {
		white: '#FFFFFF',
		black: '#202020'
	}
}

export const darkTheme = {
	...theme,

	colors: {
		...theme.colors,
		appBg: '#252525',
		layout: '#353535',
		paper: '#101010',
		primary: '#9A5EBE',
		primaryLight: '#BC99D1',
		secondary: '#6BE2DC',
		secondaryLight: '#4A99988C',
		tertiary: '#3C3C3C',
		tertiaryLight: '#505050',
		selection: '#B18CC8',
		danger: '#F35B5B',
		cancel: '#4B4B4B',
		skeleton: '#1E1E1E',
		skeletonHighlight: '#242424',

		textPrimary: '#B26DDB',
		textSecondary: '#FFFFFF',
		textTertiary: '#D0D0D0'
	}
}

export const lightTheme = {
	...theme,

	colors: {
		...theme.colors,

		appBg: '#DEDEDE',
		layout: '#C8C8C8',
		paper: '#F4F4F4',
		primary: '#B262E3',
		primaryLight: '#CA8EEE',
		secondary: '#31ABAA',
		secondaryLight: '#75CECD8C',
		tertiary: '#FCFCFC',
		tertiaryLight: '#D3D3D3',
		selection: '#D7B2ED',
		danger: '#EB4848',
		cancel: '#B1B1B1',
		skeleton: '#DADADA',
		skeletonHighlight: '#cccccc',

		textPrimary: '#A852DC',
		textSecondary: '#0B0B0B',
		textTertiary: '#2D2D2D'
	}
}

export default theme