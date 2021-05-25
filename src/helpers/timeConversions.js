export const minutesToHoursMinutes = minutes => {
	const hours = parseInt(minutes / 60)
	const mins = minutes % 60

	return `${hours}h ${mins}min`
}