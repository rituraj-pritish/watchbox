import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useHistory, withRouter } from 'react-router-dom'

const ScrollToTop = ({ children }) => {
	const history = useHistory()

	useEffect(() => {
		const unlisten = history.listen(() => {
			window.scrollTo(0, 0)
		})
		return () => {
			unlisten()
		}
	}, [history])

	return children
}

ScrollToTop.propTypes = {
	children: PropTypes.node.isRequired
}

export default withRouter(ScrollToTop)