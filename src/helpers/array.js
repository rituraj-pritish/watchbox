import moment from 'moment'

export const getUniqueArrayOfObjects = (array, attribute) => {
	if(!attribute) return array
	
	const obj = {}

	const unique = array.filter(el => {

		if(el[attribute] in obj) {
			return false
		} else {
			obj[el[attribute]] = true
			return true
		}
	})

	return unique
}

export const shuffleArray = array => {
	let currentIndex = array.length
	let randomIndex

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex--

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = 
			[array[randomIndex], array[currentIndex]]
	}

	return array
}

export const getUniqueElements = array => {
	return [...new Set(array)]
}

export const sortFn = (data, key, order = 'desc') => {
	return data.sort((a,b) => {
		const aVal = a[key]
		const bVal = b[key]

		const isDate = moment(aVal)._isValid
		
		let result = 0

		if(isDate) {
			if(moment(aVal).isAfter(bVal)) {
				result = 1
			} else {
				result = -1
			}
		} else {	
			if(aVal > bVal) {
				result = 1
			} else {
				result = -1
			}
		}

		return order === 'asc' ? result : result * -1
	})}

export const filterFn = (data, key, compareValue) => {
	if(key === 'all') return data

	return data.filter(item => {
		if(!compareValue) return item[key]
		return item[key] && item[key].toString() === compareValue
	})
}