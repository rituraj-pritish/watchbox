import { useEffect } from 'react'

const TITLE_SUFFIX = ' - WatchBox'


export default title => {

	useEffect(() => {
		if(!title) return

		let pageTitle = title 

		if(pageTitle.includes('undefined - ')) {
			pageTitle = pageTitle.replace('undefined - ', '')
		} else if (pageTitle.includes(' - undefined')) {
			pageTitle = pageTitle.replace(' - undefined', '')
		}

		document.title = pageTitle + TITLE_SUFFIX
	}, [title])
}
