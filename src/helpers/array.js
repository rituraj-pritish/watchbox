export const getUniqueArrayOfObjects = (array, attribute) => {
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