import { useState, useEffect } from 'react'

const STATUS = {
	IDLE: 'idle',
	REQUESTING: 'requesting',
	SUCCESS: 'success',
	ERROR: 'error'
}

export default (func, imediate = false) => {
	const [status, setStatus] = useState(STATUS.IDLE)
	const [error, setError] = useState(null)
	const [data, setData] = useState(null)

	const callFunction = async (payload) => {
		setStatus(STATUS.REQUESTING)
		try {
			const res = await func(payload)
			setStatus(STATUS.SUCCESS)
			setData(res)
		} catch (err) {
			setStatus(STATUS.ERROR)
			setError(err)
		}
	}

	useEffect(() => {
		if(imediate) {
			callFunction()
		}
	}, [])

	return {
		callFunction,
		status,
		error,
		data,
		STATUS,
		requesting: status === STATUS.REQUESTING
	}
}