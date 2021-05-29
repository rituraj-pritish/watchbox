import React from 'react'
import Card from './index'
import { MOVIE } from 'tests/mocks/movies.mock.js'
import { PERSON } from 'tests/mocks/person.mock.js'

export default { title: 'Card' }

export const defaultView = () => <Card {...MOVIE}/>

export const loadingView = () => <Card />

export const personView = () => (
	<Card
		person
		{...PERSON}
	/>
)