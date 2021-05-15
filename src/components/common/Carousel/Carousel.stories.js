import React from 'react'
import Carousel from './index'

export default { title: 'Carousel' }

export const defaultView = () => (
	<div style={{  height: '100vh', padding: '2rem' }}>
		<Carousel
			title='Trending'
		/>
	</div>
)

export const loadingView = () => (
	<div style={{ height: '100vh', padding: '2rem' }}>
		<Carousel title='Trending' />
	</div>
)

export const withToggle = () => (
	<div style={{ height: '100vh', padding: '2rem' }}>
		<Carousel
			title='Trending'
			toggleOptions={[
				{ label: 'Option 1', value: 1 },
				{ label: 'Option 2', value: 2 }
			]}
		/>
	</div>
)

export const fetching = () => (
	<div style={{ height: '100vh', padding: '2rem' }}>
		<div style={{ height: '200vh' }}/>
		<Carousel
			title='Trending'
			toggleOptions={[
				{ label: 'Movies', value: '/movie/top_rated' },
				{ label: 'TV', value: '/tv/top_rated' }
			]}
		/>
	</div>
)