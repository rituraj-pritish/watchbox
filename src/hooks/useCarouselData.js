import api from 'api'
import { useQuery } from 'react-query'

const getQueryKey = path => {
	const key = path.split('/')
	key.shift()
	return key
}

const options = {
	enabled: false
}

export default (paths) => {
	return paths
		.map(path => useQuery(getQueryKey(path), () => api(path), options))
}