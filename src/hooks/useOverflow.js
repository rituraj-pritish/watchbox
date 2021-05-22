import { useLayoutEffect, useRef, useState } from 'react'

export default () => {
	const ref = useRef()
	const [isOverflowingHeight, setIsOverflowingHeight] = useState(false)
	const [isOverflowingWidth, setIsOverflowingWidth] = useState(false)

	useLayoutEffect(() => {
		if(ref.current) {
			setIsOverflowingHeight(ref.current.scrollHeight > ref.current.offsetHeight)
			setIsOverflowingWidth(ref.current.scrollWidth > ref.current.offsetWidth )
		}
	}, [ref])

	return [ref, isOverflowingHeight, isOverflowingWidth]
}