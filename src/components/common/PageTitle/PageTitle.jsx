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
	ancestors
}) => {
	return (
		<FlexBox flexDirection='column'>
			<FlexBox>
				{
					ancestors.map(({ text, link }, index) => (
						<FlexBox
							key={text}
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
								to={link}
							>
								{text}
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
				mt={1}
				size={5}
				bold
				color='primary'
			>
				{title}
			</Text>
		</FlexBox>
	)
}

PageTitle.propTypes = {
	title: PropTypes.string.isRequired,
	ancestors: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired,
		link: PropTypes.string.isRequired,
	}))
}

export default PageTitle
