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

const Carousel = ({ 
	title, 
	data, 
	toggleOptions, 
	onToggleChange, 
	containerRef, 
	viewAllLink,
	...rest
}) => {
	const settings = {
		swipeToSlide: true,
		arrows: data ? true : false,
		rows: 1,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5,
		nextArrow: (
			<Icon
				className='slick-arrow slick-next'
				color='white'
				size={30}
			>
				<ChevronRight/>
			</Icon>
		),
		prevArrow: (
			<Icon
				className='slick-arrow slick-prev'
				color='white'
				size={30}
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

	return (
		<Wrapper
			ref={containerRef}
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
					<Link to={viewAllLink}>View all</Link>
				)}
			</FlexBox>
			<SliderWrapper>
				<Slider {...settings}>
					{!data && new Array(5).fill(0).map((_, idx) => <Card key={idx} />)}
					{data && data.slice(0, 20).map((item) => (
						<Card
							key={item.id}
							{...item}
						/>)
					)}
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
	containerRef: PropTypes.any.isRequired,
	viewAllLink: PropTypes.string,
}

export default Carousel
