import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Option, Wrapper } from './Toggle.styles'
import useTheme from 'hooks/useTheme'

const Toggle = ({ options, onChange }) => {
	const [selected, setSelected] = useState(options[0].value)
	const { isDarkMode } = useTheme()
	const values = options.map(({ value }) => value)

	const handleClick = (value) => {
		setSelected(value)
		if (onChange) onChange(value)
	}

	return (
		<Wrapper
			hideRightBorder={values[values.length - 1] === selected}
			hideLeftBorder={values[0] === selected}
		>
			{options.map(({ value, label }, idx) => {
				const isSelected = value === selected
				return (
					<Option
						key={idx}
						onClick={() => handleClick(value)}
						isSelected={isSelected}
						isDarkMode={isDarkMode}
					>
						{label}
					</Option>
				)
			})}
		</Wrapper>
	)
}

Toggle.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			value: PropTypes.string.isRequired
		})
	).isRequired,
	onChange: PropTypes.func.isRequired
}

export default Toggle
