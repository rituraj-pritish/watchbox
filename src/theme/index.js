const SIZE_UNIT = 1

export default {
	spacing: (factor = 1) => `${factor * SIZE_UNIT}rem`,
	borderRadius: '5px',

	colors: {
		appBg: '#242424',
		black: '#000',
		lightBlack: '#242424',
		white: '#fff',

		text: {
			primary: '',
			secondary: ''
		},

		skeleton: {
			background: '#3f3f3f',
			highlightColor: '#3a3a3a'
		}
	}
}
