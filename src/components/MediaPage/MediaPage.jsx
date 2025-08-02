import React from 'react'
import { useParams } from 'react-router'

import { capitalize } from 'helpers/string'
import useTitle from 'hooks/useTitle'
import ImageCard from 'components/common/Images/ImageCard'
import PageTitle from 'components/common/PageTitle'
import VideoCard from 'components/common/Videos/VideoCard'
import List from 'components/List'
import { ListWrapper } from './MediaPage.styles'
import { filterFn, getUniqueElements } from 'helpers/array'
import useMovie from 'hooks/useMovie'
import useShow from 'hooks/useShow'
import usePerson from 'hooks/usePerson'

const MediaPage = () => {
	let data
	const { movieId, tvId, personId, mediaType: type } = useParams()
	if(movieId) data = useMovie()
	if(tvId) data = useShow()
	if(personId) data = usePerson()

	useTitle(`${capitalize(type)} - ${data?.title || data?.name}`)
	const isVideos = type === 'videos'

	const list = isVideos 
		? data?.videos?.results 
		: data?.images ? Object.values(data.images).reduce((acc, curr) => [...acc, ...curr], []) : []

	const videoTypes = isVideos
		? getUniqueElements(list?.map(({ type }) => type))
		: null

	return (
		<div>
			<PageTitle
				title={type}
				ancestors={[
					{ title: data?.title || data?.name, path: `/${data.mediaType}/${data?.id}` }
				]}
			/>
			<List
				onlyGrid
				data={list}
				uniqueIdentifier={null}
				itemsOnOnePage={isVideos ? 15 : 21}
				filter={type === 'video' ? {
					initialValue: 'all',
					options: [
						{ label: 'All', value: 'all' },
						...videoTypes.map(type => ({
							label: type,
							value: `type/${type}`
						}))
					],
					filterFn
				} : undefined}
				dataRender={(data) => {
					return (
						<ListWrapper>
							{type !== 'videos' && data.map(item => (
								<ImageCard
									key={item.key}
									{...item}
									triggerStyles={{
										width: 'auto',
										height: 200
									}}
								/>
							)) }
							{isVideos && data.map(({ key }) => (
								<VideoCard
									key={key}
									videoKey={key}
									height={250}
									width='auto'
								/>
							))}
						</ListWrapper>
					)
				}}
			/>
		</div>
	)
}

MediaPage.propTypes = {}

export default MediaPage
