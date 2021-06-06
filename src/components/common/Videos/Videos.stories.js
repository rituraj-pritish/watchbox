import React from 'react'
import Videos from '.'

export default { title: 'Videos' }

const VIDEOS = [
	{
		'id': '5e387110ac8e6b0015c73711',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': '62EB4JniuTc',
		'name': '“Big Game” Spot',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Teaser'
	},
	{
		'id': '5fd2c1cac92c5d003ebe75a5',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': 'jkBfGvb7NzM',
		'name': 'Exclusive First Look',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Teaser'
	},
	{
		'id': '60207e6ec2b9df00409d6a91',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': 'IWBsDaFWyTE',
		'name': 'Official Trailer',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Trailer'
	},
	{
		'id': '603068baa6e2d2003f0671dd',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': 'FbsRUNI7oh4',
		'name': 'Start',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Teaser'
	},
	{
		'id': '60381d8315959f00408825f1',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': 'oqcgzj344ow',
		'name': 'Honor',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Teaser'
	},
	{
		'id': '60441ee0d18572005852d1e4',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': 'jdBUjYJ4-GQ',
		'name': 'Coworkers',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Teaser'
	},
	{
		'id': '604a664bec455200457e340f',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': 'JyrlYjSPlhk',
		'name': 'Strong',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Teaser'
	},
	{
		'id': '604a6666fa4046006d5af5e1',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': 'fqPsZlOBQok',
		'name': 'Plan',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Teaser'
	},
	{
		'id': '604a66b490fca3005a8afbe2',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': 'qeqX4d3cWqk',
		'name': 'Co-workers Featurette',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Featurette'
	},
	{
		'id': '604bc1e6fa40460059f692ff',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': 'Yt9ihEgJIZs',
		'name': 'Exclusive Clip – “The Big Three”',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Clip'
	},
	{
		'id': '604bc2348741c4005b7cd69c',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': 'bIG-HSaiotU',
		'name': 'Exclusive Clip – “What’s The Plan” (edited)',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Clip'
	},
	{
		'id': '604cf92517b5ef005490585b',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': '7ySlvHLdxBw',
		'name': 'Join',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Teaser'
	},
	{
		'id': '604ea7f42cefc2002854fbf0',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': 'tK5XoqD_q4g',
		'name': 'Co-workers',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Teaser'
	},
	{
		'id': '604f7e4d031deb006ae4b1b3',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': 'ojGHE581lsM',
		'name': 'Final Trailer',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Trailer'
	},
	{
		'id': '6050fcce4ca6760054f6c5df',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': 'Pnwbfiye5Kg',
		'name': 'Partners',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Teaser'
	},
	{
		'id': '6062ad135b071400541afc1c',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': 'qzJ00pVDXBo',
		'name': 'Work',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Teaser'
	},
	{
		'id': '6062ae9bf056d5003d44bff7',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': 'WLHKAxDDI-c',
		'name': 'Righteous',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Teaser'
	},
	{
		'id': '6079192266f2d200291adef2',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': 'iQSHrgjayz8',
		'name': 'Mid-Season Sneak Peek',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Teaser'
	},
	{
		'id': '607919569f37b00057a4b597',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': 'OFGMuUU1PpE',
		'name': 'Wakandans Featurette',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Featurette'
	},
	{
		'id': '6079197fb04228006fe27283',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': 'q3_-XYOYQQA',
		'name': 'Hurt',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Teaser'
	},
	{
		'id': '60791ac99f37b0004068504b',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': 'uLHy9BMbLMk',
		'name': 'Hypothetical',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Teaser'
	},
	{
		'id': '60791afdab68490029c777dd',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': 'IRA_uFpLmXo',
		'name': 'Zemo',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Teaser'
	},
	{
		'id': '60791b274d0e8d005a38fba9',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': 'LAeUS4Bi6cc',
		'name': 'Special Look Featurette - Toughness',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Featurette'
	},
	{
		'id': '60791bbf9f37b00078d0d301',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': 'rx1iXnu4CH4',
		'name': 'Right Handed',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Teaser'
	},
	{
		'id': '60791bd743d9b10029021031',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': 'R22tKYx8TzY',
		'name': 'Symbol',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Teaser'
	},
	{
		'id': '60791bf69f37b00057a4b92b',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': 'BunnwXfqwMg',
		'name': 'Friends',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Teaser'
	},
	{
		'id': '60791c2e7776f0002986b3c0',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': '1d6Sc0RZyTQ',
		'name': 'Continuation Featurette',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Featurette'
	},
	{
		'id': '60791c5a5b370d00580ac371',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': '0r1F2HUV00o',
		'name': 'Action',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Teaser'
	},
	{
		'id': '60791c864d0e8d005a38fcf4',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': 'Jd7R9B4naVY',
		'name': 'Power',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Teaser'
	},
	{
		'id': '60791cab2faf4d002ab16de1',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': 'wg8Vra0VJVU',
		'name': 'Special Look Featurette - Time',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Featurette'
	},
	{
		'id': '608251fea1d332004075bd4c',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': 'myW4ia-EjXQ',
		'name': 'Reason',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Teaser'
	},
	{
		'id': '608252150f0da50029ba2028',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': 'thsNmG_nDdk',
		'name': 'Metal Arm',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Teaser'
	},
	{
		'id': '6082522c126ec3003f24d96f',
		'iso_639_1': 'en',
		'iso_3166_1': 'US',
		'key': 'c5jsBUECcDA',
		'name': 'Special Look Featurette - Precision',
		'site': 'YouTube',
		'size': 1080,
		'type': 'Featurette'
	}
]

export const videos = () => (
	<>
		<Videos data={VIDEOS}/>
		<Videos />
	</>
)
