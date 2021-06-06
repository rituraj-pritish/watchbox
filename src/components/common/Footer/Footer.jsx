import React from 'react'
import FlexBox from '../ui/FlexBox'
import Link from '../ui/Link'

import { Content, Wrapper, StyledTMDBLogo } from './Footer.styles'

const Footer = () => {
	const movieLinks = [
		{ text: 'Popular movies', path: '' },
		{ text: 'Trending movies', path: '' },
		{ text: 'Top rated movies', path: '' },
		{ text: 'Now Playing movies', path: '' },
		{ text: 'Upcoming movies', path: '' }
	]

	const showLinks = [
		{ text: 'Popular tv', path: '' },
		{ text: 'Trending tv', path: '' },
		{ text: 'Top rated tv', path: '' },
		{ text: 'Now Playing tv', path: '' },
		{ text: 'Upcoming tv', path: '' }
	]
	return (
		<Wrapper>
			<Content>
				<Link
					to='/'
					size={4}
					color='textSecondary'
				>
          WatchBox
				</Link>
				
				<FlexBox>
					<FlexBox
						flexDirection='column'
						mr={100}
					>
						{movieLinks.map(({ text, path }) => (
							<Link
								key={text}
								to={path}
								my={1}
							>
								{text}
							</Link>
						))}
					</FlexBox>

					<FlexBox flexDirection='column'>
						{showLinks.map(({ text, path }) => (
							<Link
								key={text}
								to={path}
								my={1}
							>
								{text}
							</Link>
						))}
					</FlexBox>
				</FlexBox>
				
				<a
					href='https://www.themoviedb.org/'
					target='_blank'
					rel='noreferrer'
				>
					<StyledTMDBLogo/>
				</a>
			</Content>
		</Wrapper>
	)
}

export default Footer
