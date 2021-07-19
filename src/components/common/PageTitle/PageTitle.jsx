import React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as ChevronRight } from 'assets/icons/chevron-right.svg'
import { ReactComponent as ChevronLeft } from 'assets/icons/chevron-left.svg'
import FlexBox from '../ui/FlexBox'
import Link from '../ui/Link'
import Text from '../ui/Text'
import Icon from '../ui/Icon'

const PageTitle = ({
	title,
	ancestors = [],
	right,
	...rest
}) => {
	return (
		<FlexBox
			justifyContent='space-between'
			alignItems='flex-end'
			mb={4}
			{...rest}
		>
			<FlexBox
				flexDirection='column'
			>
				<FlexBox>
					{
						ancestors.map(({ title, path }, index) => (
							<FlexBox
								key={title}
								alignItems='center'
							>
								{
									ancestors.length === 1 && (
										<Icon
											size={12}
											mr={1}
											color='secondary'
										>
											<ChevronLeft/>
										</Icon>
									)
								}
								<Link
									to={path}
								>
									{title}
								</Link>
								{
									index !== (ancestors.length - 1) && (
										<Icon
											size={12}
											mx={2}
										>
											<ChevronRight/>
										</Icon>
									)
								}
							</FlexBox>
						))
					}
				</FlexBox>
				<Text
					mt={2}
					size={5}
					bold
					color='primary'
					capitalize
				>
					{title}
				</Text>
			</FlexBox>
			{!!right && right}
		</FlexBox>
	)
}

PageTitle.propTypes = {
	title: PropTypes.string.isRequired,
	ancestors: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string.isRequired,
		path: PropTypes.string.isRequired,
	})),
	right: PropTypes.node
}

export default PageTitle
