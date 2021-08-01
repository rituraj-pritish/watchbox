import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import FlexBox from '../ui/FlexBox'
import Link from '../ui/Link'
import { Content, Wrapper, StyledTMDBLogo } from './Footer.styles'
import sizes from 'theme/sizes'
import Logo from '../Logo'

const Footer = () => {
	const movieLinks = [
		{ text: 'Popular movies', path: '/discover/movie?type=popular' },
		{ text: 'Top rated movies', path: '/discover/movie?type=top_rated' },
		{ text: 'Now Playing movies', path: '/discover/movie?type=now_playing' },
		{ text: 'Upcoming movies', path: '/discover/movie?type=upcoming' }
	]

	const showLinks = [
		{ text: 'Popular shows', path: '/discover/tv?type=popular' },
		{ text: 'Top rated shows', path: '/discover/tv?type=top_rated' },
		{ text: 'Airing Today shows', path: '/discover/tv?type=airing_today' },
		{ text: 'On the air shows', path: '/discover/tv?type=on_the_air' }
	]

	const isMediumScreen = window.matchMedia(`(max-width: ${sizes.md})`).matches
	return (
		<Wrapper>
			<Content>
				{!isMediumScreen && (
					<RouterLink
						to='/'
					>
						<Logo/>
					</RouterLink>
				)}
				
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
				
				<FlexBox>
					{isMediumScreen && (
						<RouterLink
							to='/'
						>
							<Logo/>
						</RouterLink>
					)}
					<a
						href='https://www.themoviedb.org/'
						target='_blank'
						rel='noreferrer'
					>
						<StyledTMDBLogo/>
					</a>
				</FlexBox>
			</Content>
		</Wrapper>
	)
}

export default Footer
