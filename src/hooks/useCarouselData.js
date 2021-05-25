import { useQuery } from 'react-query'

const options = {
	enabled: false
}

export default (params) => {
	return params.map(({ key, request }) => useQuery(key, request, options))
}