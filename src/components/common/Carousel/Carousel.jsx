import React from 'react'
import PropTypes from 'prop-types'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import Card from '../Card'
import { SliderWrapper, Title, Wrapper } from './Carousel.styled'

const Carousel = ({ title, data }) => {
	const settings = {
		swipeToSlide: true,
		arrows: true,
		rows: 1,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5,

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
		<Wrapper>
			<Title>{title}</Title>
			<SliderWrapper>
				<Slider {...settings}>
					{data.map((item) => (
						<Card
							key={item.id}
							{...item}
						/>
					))}
				</Slider>
			</SliderWrapper>
		</Wrapper>
	)
}

Carousel.propTypes = {
	title: PropTypes.string.isRequired,
	data: PropTypes.array.isRequired
}

export default Carousel
