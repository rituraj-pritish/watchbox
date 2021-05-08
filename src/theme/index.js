const SIZE_UNIT = 1

export default {
	spacing: (factor = 1) => `${factor * SIZE_UNIT}rem`,
	borderRadius: '5px',

	space: [0, 8, 16, 24, 32],

	colors: {
		appBg: '#1b1b1b',
		layout: '#292929',
		
		overlay: '#7171714f',
		selection: '#f86272c9',
		lightBlack: '#1b1b1b',
		white: '#fff',

		danger: '#c02c34',
		primary: {
			main: '#f74a60',
			light: '#ffadc2'
		},
		secondary: {
			main: '#07c3c1',
			light: '#07C3C18c'
		},
		black: {
			main: '#101010',
			light: '#2c2c2c'
		},
		grey: {
			main: '#adadad',
			dark: '#424242',
			light: '#d0d0d0'
		},

		text: {
			white: '#ffffff',
			black: '#121212',
			lightGrey: '#d0d0d0'
		},

		skeleton: {
			background: '##1e1e1e',
			// todo decide highlight color
			highlightColor: '#3a3a3a'
		}
	}
}
