import React from 'react'
import PropTypes from 'prop-types'

import FlexBox from 'components/common/ui/FlexBox'
import Text from 'components/common/ui/Text'
import moment from 'moment'

const DATE_FORMAT = 'DD MMM YYYY'

const Data = ({
	label,
	value
}) => {
	if(!value) return null
	const isDate = typeof value === 'string' && moment(value)._isValid

	return (
		<FlexBox
			flexDirection='column'
			mr={4}
		>
			<Text
				size={1}
			>
				{label}
			</Text>
			<Text bold>{isDate ? moment(value).format(DATE_FORMAT)  : value}</Text>
		</FlexBox>
	)
}

Data.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.string
}

export default Data
