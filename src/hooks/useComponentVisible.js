import { useState, useEffect, useRef } from 'react'

export default (initialIsVisible) => {
	const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible)
	const ref = useRef(null)

	const handleClick = event => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsComponentVisible(false)
			document.removeEventListener('click', handleClick, true)
		}
	}

	useEffect(() => {
		if (isComponentVisible) {
			document.addEventListener('click', handleClick, true)
		}
	}, [isComponentVisible])

	return [ref, isComponentVisible, setIsComponentVisible]
}
