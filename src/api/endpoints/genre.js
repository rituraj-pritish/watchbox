import api from 'api'

export const getMovieGenres = () => api('/genre/movie/list')

export const getTvGenres = () => api('/genre/tv/list')
