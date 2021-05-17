import { useEffect, useRef, useState } from 'react'

const screenHeight = window.innerHeight

export default (offset = 0) => {
	const ref = useRef()
	const [isTriggered, setIsTriggered] = useState(false)

	const onScroll = () => {
		const elPosition = ref.current?.getBoundingClientRect().y

		if(elPosition - screenHeight < offset) {
			setIsTriggered(true)
			window.removeEventListener('scroll', onScroll)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', onScroll)
		return function cleanup () {
			window.removeEventListener('scroll', onScroll)
		}
	}, [])

	return [ref, isTriggered]
}