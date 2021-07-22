// forward ref function does not support prop types
/* eslint-disable react/prop-types */ 
import React, { forwardRef, useImperativeHandle, useState } from 'react'
import FlexBox from '../FlexBox'
import Text from '../Text'
import { StyledInput } from './Input.styles'

const Input = ({
	label,
	onChange,
	value,
	space,
	className,
	isRequired,
	...rest
}, ref) => {
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
			<FlexBox>
				{label && (
					<Text
						mb={2}
						bold
						color='textTertiary'
					>
						{label}
					</Text>
				)}
				{isRequired && (
					<Text
						ml={1}
						color='danger'
					>
					*
					</Text>
				)}
			</FlexBox>
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
