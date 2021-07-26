import { useEffect } from 'react'
import { capitalize } from 'helpers/string'

const TITLE_SUFFIX = ' - WatchBox'


export default title => {

	useEffect(() => {
		if(!title) return

		let pageTitle = capitalize(title) 

		if(pageTitle.includes('undefined - ')) {
			pageTitle = pageTitle.replace('undefined - ', '')
		} else if (pageTitle.includes(' - undefined')) {
			pageTitle = pageTitle.replace(' - undefined', '')
		}

		document.title = pageTitle + TITLE_SUFFIX
	}, [title])
}
