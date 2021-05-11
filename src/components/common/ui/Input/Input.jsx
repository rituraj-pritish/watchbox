import React, { useState } from 'react'
import PropTypes from 'prop-types'
import FlexBox from '../FlexBox'
import Text from '../Text'
import { StyledInput } from './Input.styles'
import useTheme from 'hooks/useTheme'

const Input = ({
	label,
	onChange,
	value,
	space,
	...rest
}) => {
	const { isDarkMode } = useTheme()
	const [text, setText] = useState(value || '')

	const handleChange = e => {
		setText(e.target.value)
		onChange(e.target.value)
	}

	return (
		<FlexBox
			flexDirection='column'
			space={space}
			{...rest}
		>
			<Text
				mb={2}
				bold
				color='tertiary'
			>
				{label}
			</Text>
			<StyledInput
				value={text}
				onChange={handleChange}
				isDarkMode={isDarkMode}
				{...rest}
			/>
		</FlexBox>
	)
}

Input.propTypes = {
	label: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.oneOfType([
		PropTypes.string,PropTypes.number,
	]).isRequired,
	space: PropTypes.number
}

export default Input
