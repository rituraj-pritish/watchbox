import { rest } from 'msw'
import URL from './url'

const RESPONSE = {
	'page': 1,
	'results': [
		{
			'adult': false,
			'backdrop_path': '/3P52oz9HPQWxcwHOwxtyrVV1LKi.jpg',
			'genre_ids': [
				28,
				35,
				12
			],
			'id': 383498,
			'media_type': 'movie',
			'original_language': 'en',
			'original_title': 'Deadpool 2',
			'overview': 'Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy\'s life.',
			'popularity': 101.693,
			'poster_path': '/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg',
			'release_date': '2018-05-10',
			'title': 'Deadpool 2',
			'video': false,
			'vote_average': 7.5,
			'vote_count': 13211
		},
		{
			'adult': false,
			'backdrop_path': '/en971MEXui9diirXlogOrPKmsEn.jpg',
			'genre_ids': [
				28,
				12,
				35
			],
			'id': 293660,
			'media_type': 'movie',
			'original_language': 'en',
			'original_title': 'Deadpool',
			'overview': 'Deadpool tells the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.',
			'popularity': 91.595,
			'poster_path': '/8peYuPeLawgCFhuI4IcDjdrAAXw.jpg',
			'release_date': '2016-02-09',
			'title': 'Deadpool',
			'video': false,
			'vote_average': 7.6,
			'vote_count': 24865
		},
		{
			'adult': false,
			'backdrop_path': '/cmjxiHqQL3cwkhb8A1HQBIaLc39.jpg',
			'genre_ids': [
				28,
				878,
				35
			],
			'id': 533535,
			'media_type': 'movie',
			'original_language': 'en',
			'original_title': 'Deadpool 3',
			'overview': '',
			'popularity': 39.495,
			'poster_path': '/1SlhjVF0QYYd3c8fJehGDrFfrQI.jpg',
			'title': 'Deadpool 3',
			'video': false,
			'vote_average': 0,
			'vote_count': 0
		},
		{
			'adult': false,
			'backdrop_path': '/5ZSwZPKgcTJJwhxjbOHeoBTVaKh.jpg',
			'genre_ids': [
				35,
				28
			],
			'id': 567604,
			'media_type': 'movie',
			'original_language': 'en',
			'original_title': 'Once Upon a Deadpool',
			'overview': 'A kidnapped Fred Savage is forced to endure Deadpool\'s PG-13 rendition of Deadpool 2 as a Princess Bride-esque story that\'s full of magic, wonder & zero F\'s.',
			'popularity': 25.558,
			'poster_path': '/5Ka49BWWyKMXr93YMbH5wLN7aAM.jpg',
			'release_date': '2018-12-11',
			'title': 'Once Upon a Deadpool',
			'video': false,
			'vote_average': 7.1,
			'vote_count': 496
		},
		{
			'adult': false,
			'backdrop_path': '/aLGAH12ubqzXmGcjansziJTeIZ9.jpg',
			'genre_ids': [
				28,
				35,
				80
			],
			'id': 558144,
			'media_type': 'movie',
			'original_language': 'en',
			'original_title': 'Deadpool: No Good Deed',
			'overview': 'Deadpool sees an opportunity to save the day, but it doesn\'t go entirely as planned.',
			'popularity': 17.224,
			'poster_path': '/pCppdEvpMkUg2acR5bgriekUgGN.jpg',
			'release_date': '2017-03-02',
			'title': 'Deadpool: No Good Deed',
			'video': true,
			'vote_average': 7.3,
			'vote_count': 129
		},
		{
			'adult': false,
			'backdrop_path': '/ff6nwH7GKNXyzUdi0pUuZnKlroE.jpg',
			'genre_ids': [
				28,
				12,
				16,
				35,
				10749
			],
			'id': 818014,
			'media_type': 'movie',
			'original_language': 'en',
			'original_title': 'Deadpool Movie in LEGO',
			'overview': 'Deadpool (2016) recreated entirely shot for shot using Lego bricks\r -\r Don\'t add any cast members from the original movie if you don\'t want this taken down.',
			'popularity': 10.263,
			'poster_path': '/lQZabuAAZNnok4p4pRBvhaZe0En.jpg',
			'release_date': '2021-04-06',
			'title': 'Deadpool Movie in LEGO',
			'video': false,
			'vote_average': 0,
			'vote_count': 0
		},
		{
			'adult': false,
			'backdrop_path': '/3OWxgd9LaSrpom45KdRptitA3I8.jpg',
			'genre_ids': [],
			'id': 745620,
			'media_type': 'movie',
			'original_language': 'en',
			'original_title': 'Gettin\' Wet on Wet with Deadpool 2',
			'overview': 'A short-parody of "The Joy of Painting" starring Deadpool as Bob Ross.',
			'popularity': 4.934,
			'poster_path': '/u6d2j1cRQ1fbFJkRmcZYyfu5ZNB.jpg',
			'release_date': '2017-11-15',
			'title': 'Gettin\' Wet on Wet with Deadpool 2',
			'video': true,
			'vote_average': 7,
			'vote_count': 4
		},
		{
			'adult': false,
			'backdrop_path': null,
			'genre_ids': [],
			'id': 825765,
			'media_type': 'movie',
			'original_language': 'en',
			'original_title': 'Deadpool 2 - The Super Duper Cut',
			'overview': 'The Super Duper Cute',
			'popularity': 11.357,
			'poster_path': '/3QYjjpcVLDEcbTkM1lFsllcU3La.jpg',
			'release_date': '2018-08-21',
			'title': 'Deadpool 2 - The Super Duper Cut',
			'video': false,
			'vote_average': 8,
			'vote_count': 1
		},
		{
			'backdrop_path': null,
			'first_air_date': '',
			'genre_ids': [
				16
			],
			'id': 88633,
			'media_type': 'tv',
			'name': 'Deadpool Suicide Kings',
			'origin_country': [
				'US'
			],
			'original_language': 'en',
			'original_name': 'Deadpool Suicide Kings',
			'overview': '',
			'popularity': 1.522,
			'poster_path': '/iUseNjIWhdDq0BqxAo4NVSNfCT.jpg',
			'vote_average': 9,
			'vote_count': 2
		},
		{
			'adult': false,
			'backdrop_path': '/j0MpfQDu4VPX06n26hz4zzqzJaX.jpg',
			'genre_ids': [],
			'id': 780171,
			'media_type': 'movie',
			'original_language': 'en',
			'original_title': 'Deadpool: With Apologies to David Beckham',
			'overview': '',
			'popularity': 1.852,
			'poster_path': '/t5UBXBy8H4eIyrTbhyDEtzabmEb.jpg',
			'release_date': '2017-01-01',
			'title': 'Deadpool: With Apologies to David Beckham',
			'video': true,
			'vote_average': 7.5,
			'vote_count': 1
		},
		{
			'adult': false,
			'backdrop_path': null,
			'genre_ids': [
				35,
				28
			],
			'id': 758622,
			'media_type': 'movie',
			'original_language': 'en',
			'original_title': 'Deadpool The Musical 2 - Ultimate Disney Parody',
			'overview': 'That "Merc with a Mouth" just can\'t. stop. singing. Join the R-rated, NSFW musical mayhem as our singing hero, Deadpool, slays his way through a series of Disney songs and superhero teams, from the X-Men to the Avengers and more, all while piling up a body count that, well, to be honest, we lost count.',
			'popularity': 7.073,
			'poster_path': '/4RgPVKdOv0pt2nF1Tdp08eCS947.jpg',
			'release_date': '2018-07-10',
			'title': 'Deadpool The Musical 2 - Ultimate Disney Parody',
			'video': false,
			'vote_average': 7,
			'vote_count': 2
		},
		{
			'adult': false,
			'backdrop_path': null,
			'genre_ids': [
				878,
				28
			],
			'id': 592698,
			'media_type': 'movie',
			'original_language': 'en',
			'original_title': 'Deadpool & Black Panther: Back in Red & Black',
			'overview': 'Two classic Marvel Heroes DeadPool and Black Panther team up to cause a little trouble in this fan made short film.',
			'popularity': 4.598,
			'poster_path': '/eFTVVxD1LFr5XF8VZ3qWpS5XnjH.jpg',
			'release_date': '2014-12-15',
			'title': 'Deadpool & Black Panther: Back in Red & Black',
			'video': true,
			'vote_average': 0,
			'vote_count': 0
		},
		{
			'backdrop_path': null,
			'genre_ids': [
				16,
				35
			],
			'id': 72762,
			'media_type': 'tv',
			'name': 'Deadpool The Animated Series',
			'origin_country': [
				'US'
			],
			'original_language': 'en',
			'original_name': 'Deadpool The Animated Series',
			'overview': 'A ten episode animated series based on the character has been developed for FXX in 2018.',
			'popularity': 0.6,
			'poster_path': null,
			'vote_average': 0,
			'vote_count': 0
		},
		{
			'adult': false,
			'backdrop_path': null,
			'genre_ids': [
				28,
				878,
				35
			],
			'id': 400507,
			'media_type': 'movie',
			'original_language': 'en',
			'original_title': 'X-Force',
			'overview': 'Plot Unknown.',
			'popularity': 2.558,
			'poster_path': '/gbk2b246pTeoy1lgQNoMSPqh0l8.jpg',
			'release_date': '',
			'title': 'X-Force',
			'video': false,
			'vote_average': 0,
			'vote_count': 0
		},
		{
			'adult': false,
			'backdrop_path': null,
			'genre_ids': [
				9648,
				53
			],
			'id': 252248,
			'media_type': 'movie',
			'original_language': 'en',
			'original_title': 'Dead Air',
			'overview': 'A distraught disc jockey (Gregory Hines) seeks out a mystery caller (Debrah Farentino) who may be the killer of his girlfriend (Laura Harrington).',
			'popularity': 0.791,
			'poster_path': '/u0uwtVEbLaGcPhXbHt0cLgIVYV.jpg',
			'release_date': '1994-10-06',
			'title': 'Dead Air',
			'video': false,
			'vote_average': 5.3,
			'vote_count': 3
		},
		{
			'adult': false,
			'backdrop_path': null,
			'genre_ids': [],
			'id': 259862,
			'media_type': 'movie',
			'original_language': 'en',
			'original_title': 'Deadpan',
			'overview': 'Deadpan is a four-minute installation film in which McQueen re-stages a death-defying Buster Keaton stunt. The side of a house is filmed toppling again and again from all angles onto an unflinching McQueen, who survives thanks to a carefully positioned window.',
			'popularity': 0.6,
			'poster_path': null,
			'release_date': '1997-01-01',
			'title': 'Deadpan',
			'video': false,
			'vote_average': 5,
			'vote_count': 5
		},
		{
			'adult': false,
			'backdrop_path': null,
			'genre_ids': [
				18
			],
			'id': 735695,
			'media_type': 'movie',
			'original_language': 'ca',
			'original_title': 'DEADPAVO',
			'overview': 'Anya and Gina have been texting for months. What started as a regular conversation between teens on Instagram turned into a daily ritual, and they both started having feelings for each other. Anya thinks she’s not ready to meet Gina in person; ghosts of disappointing past relationships stop her from taking their relationship outside of social media. One night, Anya bumps into Gina at a friend’s party—now she has to bring her digital identity and relationship with Gina to the real physical world.',
			'popularity': 0.6,
			'poster_path': '/vYHfkQpbbO0ayQyMFtJzE1GPyQe.jpg',
			'release_date': '2020-03-19',
			'title': 'DEADPAVO',
			'video': false,
			'vote_average': 0,
			'vote_count': 0
		},
		{
			'adult': false,
			'backdrop_path': null,
			'genre_ids': [
				99
			],
			'id': 783693,
			'media_type': 'movie',
			'original_language': 'en',
			'original_title': 'Deadphant',
			'overview': 'A portrait of Elephant & Castle Shopping Centre in South London, a weekend before it permanently closed, after fifty-five years on September 24, 2020.\r Super 8mm transferred to HD file, colour, sound',
			'popularity': 0.6,
			'poster_path': '/vRkkRBBiylZ9fLHldUQo7Cjb1Cg.jpg',
			'release_date': '2020-11-13',
			'title': 'Deadphant',
			'video': false,
			'vote_average': 0,
			'vote_count': 0
		},
		{
			'adult': false,
			'backdrop_path': null,
			'genre_ids': [
				99
			],
			'id': 264082,
			'media_type': 'movie',
			'original_language': 'en',
			'original_title': 'Into the Pit: The Shocking Story of Deadpit.com',
			'overview': 'Prestonburg, KY is a small blue-collar town with hunting, fishing, coal mining, and two of the biggest names in online horror talk radio: Wes Vance and Aaron Frye (aka "The Creepy Kentuckian" and "Uncle Bill") The two self-proclaimed "redneck geeks" bonded at a young age while their weekends devouring horror films.  They now use their extensive horror knowledge to record a weekly podcast on DEADPIT.com and have found a worldwide audience through their candid conversation, quick wit, and lots of swearing.  What started as an outlet to express their love for horror films has evolved into an online industry with millions of followers and the ability to talk to their childhood heroes.  But what happens when your childhood pursuits start to collide with your adult aspirations?  Can Deadpit survive it\'s own success?',
			'popularity': 1.481,
			'poster_path': null,
			'release_date': '2009-08-09',
			'title': 'Into the Pit: The Shocking Story of Deadpit.com',
			'video': false,
			'vote_average': 0,
			'vote_count': 0
		},
		{
			'adult': false,
			'backdrop_path': null,
			'genre_ids': [
				99
			],
			'id': 413323,
			'media_type': 'movie',
			'original_language': 'en',
			'original_title': 'Deadpool: From Comics to Screen... to Screen',
			'overview': 'This documentary divided into five segments examines the source and its path to the movies, backstory, special effects story/character areas, cast and performances. It includes notes from Reynolds, Liefeld, Miller, Wernick, Reese, executive producers Aditya Sood and Stan Lee, co-creator/comics writer Fabian Nicieza, producer Simon Kinberg, comics writer Joe Kelly, specialty costume designer Russell Shinkle, makeup designer Bill Corso, production designer Sean Haworth, director of photography Ken Seng, executive producer/unit production manager John J. Kelly, previs supervisor Franck Balson, stunt coordinator Philip J. Silvera, visual effects supervisors Pauline Duvall and Jonathan Rothbart, visual effects producer Annemarie Griggs, 2nd unit director/stunt coordinator Robert Alonzo, special effects coordinator Alex Burdett, utility stunts Regis Harrington, composer Tom Holkenberg, and actors Morena Baccarin, TJ Miller, Brianna Hildebrand, Leslie Uggams, Ed Skrein, and Gina Carano.',
			'popularity': 1.266,
			'poster_path': null,
			'release_date': '2016-05-10',
			'title': 'Deadpool: From Comics to Screen... to Screen',
			'video': false,
			'vote_average': 6.7,
			'vote_count': 10
		}
	],
	'total_pages': 2,
	'total_results': 21
}

export default [
	rest.get(URL + '/search/multi', (req, res, ctx) => {
		ctx.delay()
		return res(ctx.json(RESPONSE))
	})
]