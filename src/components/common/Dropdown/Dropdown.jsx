import React, { useLayoutEffect, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import useComponentVisible from 'hooks/useComponentVisible'
import Text from '../ui/Text'
import { Menu, Option, Trigger, Wrapper } from './Dropdown.styles'
import { ReactComponent as ChevronDown } from 'assets/icons/chevron-down.svg'
import { ReactComponent as ChevronUp } from 'assets/icons/chevron-down.svg'
import FlexBox from '../ui/FlexBox'
import Icon from '../ui/Icon'

const Dropdown = ({ options, onChange, value: initialValue, label, ...rest }) => {
	const [selected, setSelected] = useState(initialValue)
	const [width, setWidth] = useState()
	const [ref, showOptions, setShowOptions] = useComponentVisible(false)
	const labelRef = useRef()

	const valueLabelPairs = useMemo(
		() =>
			options.reduce(
				(acc, { label, value }) => ({
					...acc,
					[value]: label
				}),
				{}
			),
		[options]
	)

	const handleChange = (value) => {
		if (value === selected) return
		onChange(value)
		setSelected(value)
		setShowOptions(false)
	}

	useLayoutEffect(() => {
		if(ref?.current && labelRef?.current) {
			setWidth(ref.current.offsetWidth + labelRef.current.offsetWidth + 45)
		}
	}, [])

	return (
		<Wrapper
			{...rest}
		>
			<Trigger
				onClick={() => setShowOptions(!showOptions)}
				width={width}
			>
				<Text
					elRef={labelRef}
					color='textTdertiary'
				>
					{label}
				</Text>
				<FlexBox alignItems='center'>
					<Text
						ml={3}
						mr={2}
						color='textSecondary'
						bold
					>
						{valueLabelPairs[selected]}
					</Text>
					<Icon 
						mt={0.5}
						color='text'
					>
						{showOptions ? <ChevronUp/> : <ChevronDown/>}
					</Icon>
				</FlexBox>
			</Trigger>
			<Menu
				ref={ref}
				isVisible={showOptions}
				width={width}
			>
				{options.map(({ value, label }, idx) => (
					<Option
						key={idx}
						onClick={() => handleChange(value)}
						selected={value === selected}
					>
						{label}
					</Option>
				))}
			</Menu>
		</Wrapper>
	)
}

const valuePropType = PropTypes.oneOfType([PropTypes.string, PropTypes.number])

Dropdown.propTypes = {
	value: valuePropType,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			value: valuePropType
		})
	),
	onChange: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired
}

export default Dropdown
