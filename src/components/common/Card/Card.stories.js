import React from 'react'
import Card from './index'
import { MOVIE, PERSON } from './tests/data'

export default { title: 'Card' }

export const defaultView = () => <Card {...MOVIE}/>

export const loadingView = () => <Card />

export const personView = () => (
	<Card
		person
		{...PERSON}
	/>
)