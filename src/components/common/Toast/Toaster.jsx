import React from 'react'
import toast, { ToastBar, Toaster } from 'react-hot-toast'

import { ReactComponent as CrossIcon } from 'assets/icons/cross.svg'
import useTheme from 'hooks/useTheme'
import Icon from '../ui/Icon'
import theme from 'theme'

const containerStyle = {
	maxWidth: theme.maxWidth,
	margin: '0 auto',
	top: theme.navHeight
}

const ToasterComp = () => {
	const { theme } = useTheme()

	const toastOptions = React.useMemo(() => ({
		duration: 4000,
		style: {
			background: theme.colors.paper,
			color: theme.colors.textSecondary,
			maxWidth: '400px'
		}
	}), [theme])

	return (
		<Toaster
			position='top-right'
			toastOptions={toastOptions}
			containerStyle={containerStyle}
		>
			{t => (
				<ToastBar toast={t}>
					{({ icon, message }) => (
						<>
							{icon}
							{message}
							<Icon onClick={() => toast.dismiss(t.id)}>
								<CrossIcon/>
							</Icon>
						</>
					)}
				</ToastBar>
			)}
		</Toaster>
	)
}

export default ToasterComp
