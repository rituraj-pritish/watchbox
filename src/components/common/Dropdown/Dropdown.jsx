import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'

import useComponentVisible from 'hooks/useComponentVisible'
import Text from '../ui/Text'
import { Menu, Option, Trigger, Wrapper } from './Dropdown.styles'
import { ReactComponent as ChevronDown } from 'assets/icons/chevron-down.svg'
import { ReactComponent as ChevronUp } from 'assets/icons/chevron-down.svg'
import FlexBox from '../ui/FlexBox'
import Icon from '../ui/Icon'
import useTheme from 'hooks/useTheme'

const Dropdown = ({ options, onChange, value: initialValue, label }) => {
	const { isDarkMode } = useTheme()
	const [selected, setSelected] = useState(initialValue)
	const [ref, showOptions, setShowOptions] = useComponentVisible(true)

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

	return (
		<Wrapper>
			<Trigger
				onClick={() => setShowOptions(!showOptions)}
				isDarkMode={isDarkMode}
			>
				<Text color='tertiary'>{label}</Text>
				<FlexBox alignItems='center'>
					<Text
						ml={3}
						mr={2}
						color='textSecondary'
						bold
					>
						{valueLabelPairs[selected]}
					</Text>
					<Icon color='textTertiary'>
						{showOptions ? <ChevronUp/> : <ChevronDown/>}
					</Icon>
				</FlexBox>
			</Trigger>
			{showOptions && (
				<Menu ref={ref}>
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
			)}
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
