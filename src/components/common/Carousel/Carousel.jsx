import React from 'react'
import PropTypes from 'prop-types'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import { ReactComponent as ChevronRight } from 'assets/icons/chevron-right.svg'
import { ReactComponent as ChevronLeft } from 'assets/icons/chevron-left.svg'
import Card from '../Card'
import { SliderWrapper, Wrapper } from './Carousel.styles'
import Text from '../ui/Text'
import Toggle from '../Toggle'
import FlexBox from '../ui/FlexBox'
import Icon from '../ui/Icon'
import Link from '../ui/Link'

const DATA_CHUNK = 20

const Carousel = ({ 
	title, 
	data, 
	toggleOptions, 
	onToggleChange, 
	containerRef, 
	viewAllLink,
	cardRender,
	isLoading,
	...rest
}) => {
	const settings = {
		lazyLoad: true,
		swipeToSlide: true,
		arrows: data ? true : false,
		rows: 1,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5,
		nextArrow: (
			<Icon
				onClick={() => console.log('yessss caleda;sdlfkj')}
				className='slick-arrow slick-next'
				color='white'
				size={30}
				data-testid='slick-next'
			>
				<ChevronRight/>
			</Icon>
		),
		prevArrow: (
			<Icon
				className='slick-arrow slick-prev'
				color='white'
				size={30}
				data-testid='slick-prev'
			>
				<ChevronLeft/>
			</Icon>
		),
		responsive: [
			{
				breakpoint: 1150,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
	}

	const render = () => {
		if(isLoading || !data) return new Array(5)
			.fill(0).map((_, idx) => <Card key={idx} />)

		if(Array.isArray(data) && data.length === 0) return (
			<div>
				<FlexBox
					alignItems='center'
					height='100%'
				>
					No data available
				</FlexBox>
			</div>
		)

		return data.slice(0, DATA_CHUNK).map((item) => cardRender
			? cardRender(item)
			:	(
				<Card
					key={item.id}
					{...item}
				/>)
		)
	}

	return (
		<Wrapper
			ref={containerRef}
			data-testid={`${title}-section`}
			{...rest}
		>
			<div/>
			<FlexBox
				alignItems='center'
				justifyContent='space-between'
				mb={3}
			>
				<div>
					<Text
						bold
						color='primary'
						size={4}
						mr={4}
					>
						{title}
					</Text>
					{toggleOptions && (
						<Toggle
							options={toggleOptions}
							onChange={onToggleChange}
						/>
					)}
				</div>
				{viewAllLink && (
					<Link
						size={1}
						to={viewAllLink}
					>
						View all
					</Link>
				)}
			</FlexBox>
			<SliderWrapper>
				<Slider {...settings}>
					{render()}
				</Slider>
			</SliderWrapper>
		</Wrapper>
	)
}

Carousel.propTypes = {
	title: PropTypes.string.isRequired,
	data: PropTypes.array,
	toggleOptions: PropTypes.array,
	onToggleChange: PropTypes.func,
	containerRef: PropTypes.any,
	viewAllLink: PropTypes.string,
	cardRender: PropTypes.func,
	isLoading: PropTypes.bool
}

export default Carousel
