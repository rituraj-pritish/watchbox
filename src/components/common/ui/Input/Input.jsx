// forward ref function does not support prop types
/* eslint-disable react/prop-types */ 
import React, { forwardRef, useImperativeHandle, useState } from 'react'
import FlexBox from '../FlexBox'
import Text from '../Text'
import { StyledInput } from './Input.styles'
import useTheme from 'hooks/useTheme'

const Input = ({
	label,
	onChange,
	value,
	space,
	className,
	...rest
}, ref) => {
	const { isDarkMode } = useTheme()
	const [text, setText] = useState(value || '')

	useImperativeHandle(ref, () => ({
		reset: () => setText('')
	}))

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
			{label && (
				<Text
					mb={2}
					bold
					color='textTertiary'
				>
					{label}
				</Text>
			)}
			<StyledInput
				className={className}
				value={text}
				onChange={handleChange}
				{...rest}
			/>
		</FlexBox>
	)
}

export default forwardRef(Input)
