import { useState, useLayoutEffect } from 'react'

export default () => {
	const [isPageVisible, setIsPageVisible] = useState(!document.hidden)

	useLayoutEffect(() => {
		const handleVisibility = () => {
			setIsPageVisible(!document.hidden)
		}
		document.addEventListener('visibilitychange', handleVisibility)
		return () => {
			document.removeEventListener('visibilitychange', handleVisibility)
		}
	}, [])

	return isPageVisible 
}

