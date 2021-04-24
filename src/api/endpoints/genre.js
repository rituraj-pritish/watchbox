import api from 'api'

export default {
	getAll: () => api('/genre/list')
}