import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import FlexBox from '../ui/FlexBox'
import Link from '../ui/Link'
import { ReactComponent as Logo } from 'assets/Logo.svg'
import { Content, Wrapper, StyledTMDBLogo } from './Footer.styles'

const Footer = () => {
	const movieLinks = [
		{ text: 'Popular movies', path: '/discover/movie?type=popular' },
		{ text: 'Top rated movies', path: '/discover/movie?type=top_rated' },
		{ text: 'Now Playing movies', path: '/discover/movie?type=now_playing' },
		{ text: 'Upcoming movies', path: '/discover/movie?type=upcoming' }
	]

	const showLinks = [
		{ text: 'Popular tv', path: '/discover/tv?type=popular' },
		{ text: 'Top rated tv', path: '/discover/tv?type=top_rated' },
		{ text: 'Airing Today tv', path: '/discover/tv?type=airing_today' },
		{ text: 'On the air tv', path: '/discover/tv?type=on_the_air' }
	]
	return (
		<Wrapper>
			<Content>
				<RouterLink
					to='/'
				>
					<Logo/>
				</RouterLink>
				
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
