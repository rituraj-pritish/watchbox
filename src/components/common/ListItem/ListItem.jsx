import React from 'react'
import PropTypes from 'prop-types'

import { Poster, RightSection, Wrapper } from './ListItem.styles'
import { getImageUrl } from 'api'
import Text from '../ui/Text'
import moment from 'moment'
import Genres from '../Genres'

const DATE_FORMAT = 'DD MMM YYYY'

const ListItem = (props) => {
	if(props.small) return 

	const {
		poster_path,
		title,
		release_date,
		overview,
		genre_ids
	} = props

	return (
		<Wrapper>
			<Poster
				url={getImageUrl(poster_path)}
			/>   
			<RightSection>
				<Text
					bold
					color='primary'
					mb={2}
					size={3}
				>
					{title}
				</Text>
				<Text
					color='textTertiary'
					size={1}
				>
					{moment(release_date).format(DATE_FORMAT)}
				</Text>
				<Text my={3}>
					{overview}
				</Text>
				<Genres ids={genre_ids} />
			</RightSection>   
		</Wrapper>
	)
}

ListItem.propTypes = {

}

export default ListItem
