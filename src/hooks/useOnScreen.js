import { useEffect, useState } from 'react'

export default (ref, rootMargin, oneTime = false) => {
	const [isIntersecting, setIntersecting] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIntersecting(entry.isIntersecting)
				if(oneTime && entry.isIntersecting) {
					observer.unobserve(ref.current)
				}
			},
			{
				rootMargin,
			}
		)
		if (ref.current) {
			observer.observe(ref.current)
		}
		return () => {
			observer.unobserve(ref.current)
		}
	}, [])

	return isIntersecting
}