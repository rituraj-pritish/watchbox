import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import Card from '../Card'
import { Title, Wrapper } from './Carousel.styled'

const Carousel = ({ title, data }) => {
	const ref = useRef()

	const settings = {
		swipeToSlide: true,
		arrows: true,
		rows: 1,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5
	}

	return (
		<Wrapper ref={ref}>
			<Title>{title}</Title>
			<Slider {...settings}>
				{data.map((item) => (
					<Card
						key={item.id}
						{...item}
					/>
				))}
			</Slider>
		</Wrapper>
	)
}

Carousel.propTypes = {
	title: PropTypes.string.isRequired,
	data: PropTypes.array.isRequired
}

export default Carousel
