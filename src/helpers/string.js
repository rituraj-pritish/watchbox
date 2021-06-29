export const capitalize = string => {
	return string[0].toUpperCase() + string.slice(1, string.length)
}

export const camelCasedToNormal = string => {
	return string.replace('_', ' ')
}