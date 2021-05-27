import React from 'react'
import Carousel from './index'
import CarouselMain from './Carousel'

export default { title: 'Carousel' }

const DATA = [
	{
		video: false,
		vote_average: 8.1,
		overview:
      'Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung\'s best warrior, Sub-Zero, seeks out and trains with Earth\'s greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.',
		release_date: '2021-04-07',
		title: 'Mortal Kombat',
		adult: false,
		backdrop_path: '/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg',
		genre_ids: [14, 28, 12, 878, 53],
		vote_count: 980,
		original_language: 'en',
		original_title: 'Mortal Kombat',
		poster_path: '/2xmx8oPlbDaxTjHsIOZvOt5L3aJ.jpg',
		id: 460465,
		popularity: 4901.131,
		media_type: 'movie'
	},
	{
		overview:
      'A three-person crew on a mission to Mars faces an impossible choice when an unplanned passenger jeopardizes the lives of everyone on board.',
		release_date: '2021-04-22',
		adult: false,
		backdrop_path: '/lLUTG4e3asScennW3qryoXjG48Q.jpg',
		vote_count: 147,
		genre_ids: [18, 878, 53],
		original_title: 'Stowaway',
		original_language: 'en',
		id: 559581,
		poster_path: '/yOscLK7KzEPDdi1P8RmevGIjOSp.jpg',
		title: 'Stowaway',
		video: false,
		vote_average: 6.4,
		popularity: 138.557,
		media_type: 'movie'
	},
	{
		backdrop_path: '/8z9qQkx7wA6FXpLV8Tiw9mfsRFK.jpg',
		first_air_date: '2021-04-23',
		genre_ids: [10765],
		id: 85720,
		name: 'Shadow and Bone',
		origin_country: ['US'],
		original_language: 'en',
		original_name: 'Shadow and Bone',
		overview:
      'In a world cleaved in two by a massive barrier of perpetual darkness, a young soldier uncovers a power that might finally unite her country. But as she struggles to hone her power, dangerous forces plot against her. Thugs, thieves, assassins and saints are at war now, and it will take more than magic to survive.',
		poster_path: '/mrVoyDFiDSqfH4mkoRtccOv2vwh.jpg',
		vote_average: 8.8,
		vote_count: 60,
		popularity: 125.209,
		media_type: 'tv'
	},
	{
		overview:
      'Following the events of “Avengers: Endgame”, the Falcon, Sam Wilson and the Winter Soldier, Bucky Barnes team up in a global adventure that tests their abilities, and their patience.',
		original_name: 'The Falcon and the Winter Soldier',
		origin_country: ['US'],
		backdrop_path: '/b0WmHGc8LHTdGCVzxRb3IBMur57.jpg',
		genre_ids: [10765, 10759, 18, 10768],
		vote_count: 4726,
		first_air_date: '2021-03-19',
		id: 88396,
		poster_path: '/6kbAMLteGO8yyewYau6bJ683sw7.jpg',
		vote_average: 7.9,
		original_language: 'en',
		name: 'The Falcon and the Winter Soldier',
		popularity: 6980.83,
		media_type: 'tv'
	},
	{
		title: 'Godzilla vs. Kong',
		adult: false,
		backdrop_path: '/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg',
		id: 399566,
		original_language: 'en',
		original_title: 'Godzilla vs. Kong',
		poster_path: '/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg',
		video: false,
		vote_average: 8.2,
		vote_count: 4886,
		overview:
      'In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.',
		release_date: '2021-03-24',
		genre_ids: [28, 878],
		popularity: 4853.228,
		media_type: 'movie'
	},
	{
		video: false,
		vote_average: 8.5,
		overview:
      'Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor — a "nobody." When two thieves break into his home one night, Hutch\'s unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind.',
		release_date: '2021-03-18',
		vote_count: 735,
		adult: false,
		backdrop_path: '/6zbKgwgaaCyyBXE4Sun4oWQfQmi.jpg',
		title: 'Nobody',
		genre_ids: [28, 53, 80],
		id: 615457,
		original_language: 'en',
		original_title: 'Nobody',
		poster_path: '/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg',
		popularity: 2703.802,
		media_type: 'movie'
	},
	{
		adult: false,
		backdrop_path: '/5Zv5KmgZzdIvXz2KC3n0MyecSNL.jpg',
		genre_ids: [28, 53, 80],
		id: 634528,
		original_language: 'en',
		original_title: 'The Marksman',
		overview:
      'Jim Hanson’s quiet life is suddenly disturbed by two people crossing the US/Mexico border – a woman and her young son – desperate to flee a Mexican cartel. After a shootout leaves the mother dead, Jim becomes the boy’s reluctant defender. He embraces his role as Miguel’s protector and will stop at nothing to get him to safety, as they go on the run from the relentless assassins.',
		poster_path: '/6vcDalR50RWa309vBH1NLmG2rjQ.jpg',
		release_date: '2021-01-15',
		title: 'The Marksman',
		video: false,
		vote_average: 7.1,
		vote_count: 157,
		popularity: 2579.794,
		media_type: 'movie'
	},
	{
		original_title: 'The Courier',
		poster_path: '/zFIjKtZrzhmc7HecdFXXjsLR2Ig.jpg',
		video: false,
		id: 522241,
		overview:
      'Cold War spy Greville Wynne and his Russian source try to put an end to the Cuban Missile Crisis.',
		release_date: '2021-03-18',
		title: 'The Courier',
		adult: false,
		backdrop_path: '/3pIqd1hgZ2xqzWEyiYp4blqE9Fi.jpg',
		vote_count: 36,
		genre_ids: [18, 53],
		vote_average: 6.8,
		original_language: 'en',
		popularity: 100.847,
		media_type: 'movie'
	},
	{
		poster_path: '/66GUmWpTHgAjyp4aBSXy63PZTiC.jpg',
		video: false,
		vote_average: 7.5,
		overview:
      'A woman in her sixties embarks on a journey through the western United States after losing everything in the Great Recession, living as a van-dwelling modern-day nomad.',
		release_date: '2021-01-29',
		id: 581734,
		adult: false,
		backdrop_path: '/bjjZXrP8PEdFeJkKERc62xlarMI.jpg',
		title: 'Nomadland',
		genre_ids: [18, 37],
		vote_count: 557,
		original_language: 'en',
		original_title: 'Nomadland',
		popularity: 269.722,
		media_type: 'movie'
	},
	{
		vote_average: 1,
		overview:
      'A lonesome stranger with nerves of steel must track down and kill a rogue hitman to satisfy an outstanding debt. But the only information he\'s been given is a time and location where to find his quarry. No name. No description. Nothing.',
		release_date: '2021-04-30',
		adult: false,
		backdrop_path: '/wio5x2etYayFz8TYSoi3PvpzFcK.jpg',
		vote_count: 1,
		genre_ids: [53, 28, 80],
		id: 808023,
		original_language: 'en',
		original_title: 'The Virtuoso',
		poster_path: '/8RIjjmWZi8tJf5lRxyHGErentsv.jpg',
		title: 'The Virtuoso',
		video: false,
		popularity: 25.668,
		media_type: 'movie'
	},
	{
		original_language: 'en',
		original_title: 'Zack Snyder\'s Justice League',
		poster_path: '/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg',
		video: false,
		vote_average: 8.5,
		id: 791373,
		release_date: '2021-03-18',
		vote_count: 5114,
		title: 'Zack Snyder\'s Justice League',
		adult: false,
		backdrop_path: '/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg',
		overview:
      'Determined to ensure Superman\'s ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.',
		genre_ids: [28, 12, 14, 878],
		popularity: 2788.708,
		media_type: 'movie'
	},
	{
		original_language: 'en',
		original_title: 'Love and Monsters',
		poster_path: '/r4Lm1XKP0VsTgHX4LG4syAwYA2I.jpg',
		video: false,
		vote_average: 7.4,
		id: 590223,
		release_date: '2020-10-16',
		vote_count: 1516,
		title: 'Love and Monsters',
		adult: false,
		backdrop_path: '/lA5fOBqTOQBQ1s9lEYYPmNXoYLi.jpg',
		overview:
      'Seven years since the Monsterpocalypse began, Joel Dawson has been living underground in order to survive. But after reconnecting over radio with his high school girlfriend Aimee, Joel decides to venture out to reunite with her, despite all the dangerous monsters that stand in his way.',
		genre_ids: [35, 28, 12, 14],
		popularity: 316.921,
		media_type: 'movie'
	},
	{
		title: 'Judas and the Black Messiah',
		adult: false,
		backdrop_path: '/fatz1aegtBGh7KS0gipcsw9MqUn.jpg',
		id: 583406,
		original_language: 'en',
		original_title: 'Judas and the Black Messiah',
		poster_path: '/iIgr75GoqFxe1X5Wz9siOODGe9u.jpg',
		video: false,
		vote_average: 7.5,
		vote_count: 444,
		overview:
      'Bill O\'Neal infiltrates the Black Panthers on the orders of FBI Agent Mitchell and J. Edgar Hoover. As Black Panther Chairman Fred Hampton ascends—falling for a fellow revolutionary en route—a battle wages for O’Neal’s soul.',
		release_date: '2021-02-12',
		genre_ids: [18, 36],
		popularity: 147.744,
		media_type: 'movie'
	},
	{
		original_title: 'Trigger Point',
		poster_path: '/2YlS6d7tBVUNstYGkjTv1JmHzF3.jpg',
		video: false,
		vote_average: 7.5,
		overview:
      'Nicolas Shaw is a retired U.S. special operative who becomes part of an elite \'invisible\' team that quietly takes out the worst villains around the world.',
		release_date: '2021-04-23',
		id: 809314,
		adult: false,
		backdrop_path: '/jWMWZ2ttg8B8YtVzG04UfhlcL67.jpg',
		vote_count: 2,
		genre_ids: [28, 53],
		title: 'Trigger Point',
		original_language: 'en',
		popularity: 111.839,
		media_type: 'movie'
	},
	{
		video: false,
		vote_average: 8.3,
		overview:
      'Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.',
		release_date: '2021-03-03',
		vote_count: 2418,
		adult: false,
		backdrop_path: '/7prYzufdIOy1KCTZKVWpjBFqqNr.jpg',
		title: 'Raya and the Last Dragon',
		genre_ids: [16, 12, 14, 10751, 28],
		id: 527774,
		original_language: 'en',
		original_title: 'Raya and the Last Dragon',
		poster_path: '/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg',
		popularity: 1692.104,
		media_type: 'movie'
	},
	{
		origin_country: ['IT'],
		overview:
      'A teenager who can make herself invisible is used by an idiot to take control of the neighborhood and then meets a mysterious art student.',
		vote_count: 19,
		backdrop_path: '/bi8hQxzS1Ekgepzh5V2D2eg3Cxh.jpg',
		vote_average: 7.8,
		genre_ids: [10765],
		name: 'Zero',
		id: 119861,
		first_air_date: '2021-04-21',
		poster_path: '/843MWmiaoMOrfnM2kPC96KfLUkt.jpg',
		original_language: 'it',
		original_name: 'Zero',
		popularity: 73.948,
		media_type: 'tv'
	},
	{
		title: 'Promising Young Woman',
		adult: false,
		backdrop_path: '/rWrvcsrvISKXdMOzCdkvU3Jtg0j.jpg',
		id: 582014,
		original_language: 'en',
		original_title: 'Promising Young Woman',
		poster_path: '/cjzU4g6SlScnP4MdkleyI25KGlR.jpg',
		video: false,
		vote_average: 7.6,
		vote_count: 796,
		overview:
      'A young woman, traumatized by a tragic event in her past, seeks out vengeance against those who crossed her path.',
		release_date: '2020-12-13',
		genre_ids: [53, 80, 18],
		popularity: 141.399,
		media_type: 'movie'
	},
	{
		title: 'Vanquish',
		adult: false,
		backdrop_path: '/mb3fcmQzXd8aUf7r6izZfMHSJmz.jpg',
		id: 804435,
		original_language: 'en',
		original_title: 'Vanquish',
		poster_path: '/AoWY1gkcNzabh229Icboa1Ff0BM.jpg',
		video: false,
		vote_average: 6.1,
		vote_count: 30,
		overview:
      'Victoria is a young mother trying to put her dark past as a Russian drug courier behind her, but retired cop Damon forces Victoria to do his bidding by holding her daughter hostage. Now, Victoria must use guns, guts and a motorcycle to take out a series of violent gangsters—or she may never see her child again.',
		release_date: '2021-04-16',
		genre_ids: [28, 80, 53],
		popularity: 344.795,
		media_type: 'movie'
	},
	{
		overview:
      'Two unlikely companions embark on a perilous adventure through the badlands of an unexplored planet as they try to escape a dangerous and disorienting reality, where all inner thoughts are seen and heard by everyone.',
		release_date: '2021-02-24',
		title: 'Chaos Walking',
		id: 412656,
		adult: false,
		backdrop_path: '/ovggmAOu1IbPGTQE8lg4lBasNC7.jpg',
		genre_ids: [878, 28, 12, 53],
		original_language: 'en',
		original_title: 'Chaos Walking',
		poster_path: '/9kg73Mg8WJKlB9Y2SAJzeDKAnuB.jpg',
		vote_count: 439,
		video: false,
		vote_average: 7.4,
		popularity: 1996.332,
		media_type: 'movie'
	},
	{
		vote_average: 6.9,
		overview:
      'After his grandfather\'s death, a young man decides to fulfill his elder\'s last wish with the help of his new friends. The problem starts when he falls in love with a female friend who may not feel the same.',
		release_date: '2020-12-25',
		adult: false,
		backdrop_path: '/7W2ob4ALcwstMFdRfwLrcjUIHmx.jpg',
		vote_count: 10,
		genre_ids: [18, 10749],
		id: 676859,
		original_language: 'es',
		original_title: 'Dime cuando tú',
		poster_path: '/6XVcNvXQoa0z1QPQOr1Dd0ZHPAd.jpg',
		title: 'Tell Me When',
		video: false,
		popularity: 16.654,
		media_type: 'movie'
	}
]

const CAST = [
	{
		'adult': false,
		'gender': 2,
		'id': 28846,
		'known_for_department': 'Acting',
		'name': 'Alexander Skarsgård',
		'original_name': 'Alexander Skarsgård',
		'popularity': 5.669,
		'profile_path': '/2y0wYdLE4MOmfxmOzfvSNPY3fGr.jpg',
		'cast_id': 213,
		'character': 'Dr. Nathan Lind',
		'credit_id': '60870ca984448e004124f8b5',
		'order': 0
	},
	{
		'adult': false,
		'gender': 1,
		'id': 1356210,
		'known_for_department': 'Acting',
		'name': 'Millie Bobby Brown',
		'original_name': 'Millie Bobby Brown',
		'popularity': 15.989,
		'profile_path': '/yzfxLMcBMusKzZp9f1Z9Ags8WML.jpg',
		'cast_id': 10,
		'character': 'Madison Russell',
		'credit_id': '5b154f5dc3a368533000d528',
		'order': 1
	},
	{
		'adult': false,
		'gender': 1,
		'id': 15556,
		'known_for_department': 'Acting',
		'name': 'Rebecca Hall',
		'original_name': 'Rebecca Hall',
		'popularity': 9.285,
		'profile_path': '/cVZaQrUY7F5khCBYdKDlEppHnQi.jpg',
		'cast_id': 29,
		'character': 'Dr. Ilene Andrews',
		'credit_id': '5bd9b264925141156c00e024',
		'order': 2
	},
	{
		'adult': false,
		'gender': 2,
		'id': 226366,
		'known_for_department': 'Acting',
		'name': 'Brian Tyree Henry',
		'original_name': 'Brian Tyree Henry',
		'popularity': 6.453,
		'profile_path': '/1h4sYFAc1inxcV0Ljrl5v2mMskI.jpg',
		'cast_id': 25,
		'character': 'Bernie Hayes',
		'credit_id': '5bbeafae9251413d51006008',
		'order': 3
	},
	{
		'adult': false,
		'gender': 2,
		'id': 46364,
		'known_for_department': 'Acting',
		'name': 'Shun Oguri',
		'original_name': 'Shun Oguri',
		'popularity': 7.28,
		'profile_path': '/4tfrhvqp3IGHPATor0lYE9X9UD3.jpg',
		'cast_id': 32,
		'character': 'Ren Serizawa',
		'credit_id': '5be890c90e0a263c0a031146',
		'order': 4
	},
	{
		'adult': false,
		'gender': 1,
		'id': 1222992,
		'known_for_department': 'Acting',
		'name': 'Eiza González',
		'original_name': 'Eiza González',
		'popularity': 11.28,
		'profile_path': '/w2pZ8gLqZNguj8cqrDGbMw2Ibj0.jpg',
		'cast_id': 28,
		'character': 'Maia Simmons',
		'credit_id': '5bd9b256925141155700e422',
		'order': 5
	},
	{
		'adult': false,
		'gender': 2,
		'id': 1139349,
		'known_for_department': 'Acting',
		'name': 'Julian Dennison',
		'original_name': 'Julian Dennison',
		'popularity': 5.66,
		'profile_path': '/9wmT8RDfJL2yKuY5AeJuDTkHSJe.jpg',
		'cast_id': 9,
		'character': 'Josh Valentine',
		'credit_id': '5b1411640e0a262dca0000ac',
		'order': 6
	},
	{
		'adult': false,
		'gender': 2,
		'id': 129101,
		'known_for_department': 'Acting',
		'name': 'Lance Reddick',
		'original_name': 'Lance Reddick',
		'popularity': 3.433,
		'profile_path': '/22mVtEXZbpt0J7S0LhIhdkfRrZV.jpg',
		'cast_id': 37,
		'character': 'Guillermin',
		'credit_id': '5becd66d9251413cdb009fcc',
		'order': 7
	},
	{
		'adult': false,
		'gender': 2,
		'id': 3497,
		'known_for_department': 'Acting',
		'name': 'Kyle Chandler',
		'original_name': 'Kyle Chandler',
		'popularity': 6.505,
		'profile_path': '/12ycW6JwP51RJA36mbT7ietI4Ce.jpg',
		'cast_id': 11,
		'character': 'Mark Russell',
		'credit_id': '5b154f7c0e0a262dea00a185',
		'order': 8
	},
	{
		'adult': false,
		'gender': 2,
		'id': 76961,
		'known_for_department': 'Acting',
		'name': 'Demián Bichir',
		'original_name': 'Demián Bichir',
		'popularity': 2.997,
		'profile_path': '/sw8TqPQLbMMgLbkNNUIW649THWJ.jpg',
		'cast_id': 26,
		'character': 'Walter Simmons',
		'credit_id': '5bc82e840e0a26362e01120e',
		'order': 9
	},
	{
		'adult': false,
		'gender': 1,
		'id': 2948491,
		'known_for_department': 'Acting',
		'name': 'Kaylee Hottle',
		'original_name': 'Kaylee Hottle',
		'popularity': 0.69,
		'profile_path': '/xpQQZgptOUI6duMMBDyCiaJ4JUv.jpg',
		'cast_id': 60,
		'character': 'Jia',
		'credit_id': '600c0d153710970041a1a056',
		'order': 10
	},
	{
		'adult': false,
		'gender': 2,
		'id': 2603,
		'known_for_department': 'Acting',
		'name': 'Hakeem Kae-Kazim',
		'original_name': 'Hakeem Kae-Kazim',
		'popularity': 1.184,
		'profile_path': '/sVNHRm51c9toG73FUQ5k1St0vju.jpg',
		'cast_id': 59,
		'character': 'Admiral Wilcox',
		'credit_id': '600c0cedc86b3a003fbe0ca3',
		'order': 11
	},
	{
		'adult': false,
		'gender': 2,
		'id': 1319469,
		'known_for_department': 'Acting',
		'name': 'Ronny Chieng',
		'original_name': 'Ronny Chieng',
		'popularity': 1.4,
		'profile_path': '/haFPocRfiud0Miw45HlknGMaLG5.jpg',
		'cast_id': 58,
		'character': 'Jay Wayne',
		'credit_id': '600c0cd2dd83fa0040909c38',
		'order': 12
	},
	{
		'adult': false,
		'gender': 2,
		'id': 1178193,
		'known_for_department': 'Acting',
		'name': 'John Pirruccello',
		'original_name': 'John Pirruccello',
		'popularity': 2.267,
		'profile_path': '/5fHP9q7bLbOGpeyoKpkz6MaunMN.jpg',
		'cast_id': 57,
		'character': 'Horace',
		'credit_id': '600c0cb7813cb600427c006c',
		'order': 13
	},
	{
		'adult': false,
		'gender': 2,
		'id': 172096,
		'known_for_department': 'Acting',
		'name': 'Chris Chalk',
		'original_name': 'Chris Chalk',
		'popularity': 1.705,
		'profile_path': '/j8IpJkLTAhalh5Q356VNojcIAtx.jpg',
		'cast_id': 56,
		'character': 'Ben',
		'credit_id': '600c0c95c86b3a003fbe0c83',
		'order': 14
	},
	{
		'adult': false,
		'gender': 2,
		'id': 2545317,
		'known_for_department': 'Acting',
		'name': 'Conlan Casal',
		'original_name': 'Conlan Casal',
		'popularity': 0.6,
		'profile_path': '/nBbRXpuiufIXeXhHR3v9I2kEymP.jpg',
		'cast_id': 72,
		'character': 'Apex Cybernetics Security Guard',
		'credit_id': '601624c0976a23003ca463e2',
		'order': 15
	},
	{
		'adult': false,
		'gender': 2,
		'id': 123540,
		'known_for_department': 'Acting',
		'name': 'Brad McMurray',
		'original_name': 'Brad McMurray',
		'popularity': 0.968,
		'profile_path': '/bfsTsUwYajWlVPgkcY9QzrWuVbi.jpg',
		'cast_id': 73,
		'character': 'Apex Cybernetics Security Guard',
		'credit_id': '601624cebc8657003e6c16e9',
		'order': 16
	},
	{
		'adult': false,
		'gender': 2,
		'id': 1371541,
		'known_for_department': 'Acting',
		'name': 'Benjamin Rigby',
		'original_name': 'Benjamin Rigby',
		'popularity': 1.397,
		'profile_path': '/le5qTKDolOJBZ5mWjnx5QwNbCPA.jpg',
		'cast_id': 74,
		'character': 'Sonar Operator',
		'credit_id': '601624f10816c7003f84c7e6',
		'order': 17
	},
	{
		'adult': false,
		'gender': 2,
		'id': 2272452,
		'known_for_department': 'Crew',
		'name': 'Nick Turello',
		'original_name': 'Nick Turello',
		'popularity': 0.6,
		'profile_path': '/hKlnldINN0J6bY3Rj9PXvjSzjMb.jpg',
		'cast_id': 75,
		'character': 'Apex Cybernetics Armed Guard',
		'credit_id': '6016250dbf0f63003e0f1642',
		'order': 18
	},
	{
		'adult': false,
		'gender': 2,
		'id': 2881089,
		'known_for_department': 'Acting',
		'name': 'Daniel Nelson',
		'original_name': 'Daniel Nelson',
		'popularity': 0.84,
		'profile_path': '/jfVtAqELfncHRHomUrTuVVYXrg.jpg',
		'cast_id': 51,
		'character': 'Hayworth',
		'credit_id': '5fca3f64dcf875003f40b2f5',
		'order': 19
	},
	{
		'adult': false,
		'gender': 1,
		'id': 2102960,
		'known_for_department': 'Acting',
		'name': 'Priscilla Doueihy',
		'original_name': 'Priscilla Doueihy',
		'popularity': 0.6,
		'profile_path': '/it4g13EMcqsXXggG1DYcOxQZwsA.jpg',
		'cast_id': 54,
		'character': 'Monarch Mission Tech',
		'credit_id': '600a0673d55c3d00406c465e',
		'order': 20
	},
	{
		'adult': false,
		'gender': 0,
		'id': 2958901,
		'known_for_department': 'Acting',
		'name': 'Kei Kudo',
		'original_name': 'Kei Kudo',
		'popularity': 1.38,
		'profile_path': null,
		'cast_id': 76,
		'character': 'HEAV Pilot',
		'credit_id': '6016254428723c003dabf6c7',
		'order': 21
	},
	{
		'adult': false,
		'gender': 2,
		'id': 1871679,
		'known_for_department': 'Crew',
		'name': 'Bradd Buckley',
		'original_name': 'Bradd Buckley',
		'popularity': 0.6,
		'profile_path': null,
		'cast_id': 77,
		'character': 'HEAV Pilot',
		'credit_id': '601625512d3721003fc35858',
		'order': 22
	},
	{
		'adult': false,
		'gender': 2,
		'id': 1265157,
		'known_for_department': 'Acting',
		'name': 'John Walton',
		'original_name': 'John Walton',
		'popularity': 0.98,
		'profile_path': null,
		'cast_id': 163,
		'character': 'HEAV Co-Pilot',
		'credit_id': '606a97e512c6040029621ca3',
		'order': 23
	},
	{
		'adult': false,
		'gender': 2,
		'id': 2612144,
		'known_for_department': 'Acting',
		'name': 'Daniel Tuiara',
		'original_name': 'Daniel Tuiara',
		'popularity': 1.38,
		'profile_path': '/7FQS4v8pa84ojcCuRfOzqI64NC0.jpg',
		'cast_id': 164,
		'character': 'HEAV Co-Pilot',
		'credit_id': '606a97efa14bef00792a4109',
		'order': 24
	},
	{
		'adult': false,
		'gender': 2,
		'id': 1696636,
		'known_for_department': 'Crew',
		'name': 'David Castillo',
		'original_name': 'David Castillo',
		'popularity': 0.6,
		'profile_path': '/jlQLRRhOJB3bkXNMletYPio8pS4.jpg',
		'cast_id': 78,
		'character': 'Maia Apex Cybernetics Guard',
		'credit_id': '6016256fd96c3c00410ec397',
		'order': 25
	},
	{
		'adult': false,
		'gender': 2,
		'id': 1298704,
		'known_for_department': 'Acting',
		'name': 'Kofi Yiadom',
		'original_name': 'Kofi Yiadom',
		'popularity': 0.695,
		'profile_path': '/uvVMFFmg26p1sd9mQaclczyunx.jpg',
		'cast_id': 79,
		'character': 'Maia Apex Cybernetics Guard',
		'credit_id': '6016257cbc8657003d6be201',
		'order': 26
	},
	{
		'adult': false,
		'gender': 2,
		'id': 9568,
		'known_for_department': 'Acting',
		'name': 'Jim Palmer',
		'original_name': 'Jim Palmer',
		'popularity': 0.6,
		'profile_path': '/oFaoyxX8EPY6VxBJ3pVyMezseuZ.jpg',
		'cast_id': 55,
		'character': 'Maia Apex Cybernetics Guard',
		'credit_id': '600a0685d70594003d1d76af',
		'order': 27
	},
	{
		'adult': false,
		'gender': 2,
		'id': 2958904,
		'known_for_department': 'Acting',
		'name': 'Drew Walton',
		'original_name': 'Drew Walton',
		'popularity': 1.38,
		'profile_path': '/g8byyulAZcXW5heefanHMG227pY.jpg',
		'cast_id': 80,
		'character': 'David Lind (uncredited)',
		'credit_id': '601625a7cb802800411054e7',
		'order': 28
	},
	{
		'adult': false,
		'gender': 1,
		'id': 1692993,
		'known_for_department': 'Acting',
		'name': 'Tara Wraith',
		'original_name': 'Tara Wraith',
		'popularity': 0.828,
		'profile_path': '/7hxplRWMQy0iQPLIBVQyWL9fD6R.jpg',
		'cast_id': 182,
		'character': 'Monarch Flight Crew (uncredited)',
		'credit_id': '607b87d07a97ab0040a07b2d',
		'order': 29
	},
	{
		'adult': false,
		'gender': 2,
		'id': 2027791,
		'known_for_department': 'Acting',
		'name': 'Jason Virgil',
		'original_name': 'Jason Virgil',
		'popularity': 0.6,
		'profile_path': '/4rMBW2yVt4uH8xrHSt9ORu3bc2C.jpg',
		'cast_id': 187,
		'character': 'Bartender (uncredited)',
		'credit_id': '607b892aab68490029ca5f05',
		'order': 30
	},
	{
		'adult': false,
		'gender': 1,
		'id': 2524631,
		'known_for_department': 'Acting',
		'name': 'Grisel Toledo',
		'original_name': 'Grisel Toledo',
		'popularity': 0.6,
		'profile_path': null,
		'cast_id': 188,
		'character': 'Apex Guard (uncredited)',
		'credit_id': '607b896a746457005892f336',
		'order': 31
	},
	{
		'adult': false,
		'gender': 2,
		'id': 2265521,
		'known_for_department': 'Acting',
		'name': 'Jason Szabo',
		'original_name': 'Jason Szabo',
		'popularity': 0.6,
		'profile_path': null,
		'cast_id': 190,
		'character': 'Monarch Tactical Guard',
		'credit_id': '607b89b5ae281100404a8bbb',
		'order': 32
	},
	{
		'adult': false,
		'gender': 2,
		'id': 1486626,
		'known_for_department': 'Production',
		'name': 'Jason Speer',
		'original_name': 'Jason Speer',
		'popularity': 0.6,
		'profile_path': null,
		'cast_id': 191,
		'character': 'Monarch Board Member (uncredited)',
		'credit_id': '607b89eb29c626007990af2a',
		'order': 33
	},
	{
		'adult': false,
		'gender': 2,
		'id': 2030686,
		'known_for_department': 'Acting',
		'name': 'Sen Shao',
		'original_name': 'Sen Shao',
		'popularity': 0.6,
		'profile_path': null,
		'cast_id': 193,
		'character': 'Thug (uncredited)',
		'credit_id': '607b8a26746457005892f4dc',
		'order': 34
	},
	{
		'adult': false,
		'gender': 2,
		'id': 1879911,
		'known_for_department': 'Acting',
		'name': 'Scott M. Schewe',
		'original_name': 'Scott M. Schewe',
		'popularity': 0.6,
		'profile_path': null,
		'cast_id': 195,
		'character': 'Fisherman (uncredited)',
		'credit_id': '607b8a6143d9b10057d93ed8',
		'order': 35
	},
	{
		'adult': false,
		'gender': 2,
		'id': 2965914,
		'known_for_department': 'Acting',
		'name': 'Charles Sans',
		'original_name': 'Charles Sans',
		'popularity': 0.98,
		'profile_path': null,
		'cast_id': 197,
		'character': 'Apex Guard (uncredited)',
		'credit_id': '607b8a9cf263ba007094aff8',
		'order': 36
	},
	{
		'adult': false,
		'gender': 1,
		'id': 1244248,
		'known_for_department': 'Acting',
		'name': 'Tasneem Roc',
		'original_name': 'Tasneem Roc',
		'popularity': 0.847,
		'profile_path': '/ilkyHt7YpN7bNTYzhODXWR0QnwN.jpg',
		'cast_id': 198,
		'character': 'Reporter (uncredited)',
		'credit_id': '607b8b24aa659e0078dccbde',
		'order': 37
	},
	{
		'adult': false,
		'gender': 2,
		'id': 2573855,
		'known_for_department': 'Acting',
		'name': 'Diezel Ramos',
		'original_name': 'Diezel Ramos',
		'popularity': 0.6,
		'profile_path': '/uoMRnPYtWbKSgTY7LdeUPblruP1.jpg',
		'cast_id': 199,
		'character': 'Monarch Military (uncredited)',
		'credit_id': '607b8b41ab68490029ca6270',
		'order': 38
	},
	{
		'adult': false,
		'gender': 2,
		'id': 1840497,
		'known_for_department': 'Acting',
		'name': 'Jon Quested',
		'original_name': 'Jon Quested',
		'popularity': 0.6,
		'profile_path': '/7tpHhDx4I9ysdcBKa8OXKdxH8Uj.jpg',
		'cast_id': 200,
		'character': 'Construction Worker (uncredited)',
		'credit_id': '607b8b5a29c626004127d4dc',
		'order': 39
	},
	{
		'adult': false,
		'gender': 2,
		'id': 2269093,
		'known_for_department': 'Acting',
		'name': 'Joel Pierce',
		'original_name': 'Joel Pierce',
		'popularity': 0.829,
		'profile_path': '/n1CwK63h1wgYozM9nMt2KPdQI5z.jpg',
		'cast_id': 201,
		'character': 'Monarch Tech #2 (uncredited)',
		'credit_id': '607b8b859408ec0057c12215',
		'order': 40
	},
	{
		'adult': false,
		'gender': 1,
		'id': 2537658,
		'known_for_department': 'Acting',
		'name': 'Sofia Nolan',
		'original_name': 'Sofia Nolan',
		'popularity': 0.6,
		'profile_path': '/jKTdzMjfSXqlxj9vkHqG4wVj3BS.jpg',
		'cast_id': 202,
		'character': 'Mean Girl (uncredited)',
		'credit_id': '607b8c329661fc005883cddb',
		'order': 41
	},
	{
		'adult': false,
		'gender': 2,
		'id': 1879895,
		'known_for_department': 'Acting',
		'name': 'Shawn McBride',
		'original_name': 'Shawn McBride',
		'popularity': 0.6,
		'profile_path': null,
		'cast_id': 204,
		'character': 'Fisherman (uncredited)',
		'credit_id': '607b8c86713ed40058d7677e',
		'order': 42
	},
	{
		'adult': false,
		'gender': 2,
		'id': 2545358,
		'known_for_department': 'Acting',
		'name': 'Clay Mason',
		'original_name': 'Clay Mason',
		'popularity': 0.6,
		'profile_path': null,
		'cast_id': 206,
		'character': 'Refugee (uncredited)',
		'credit_id': '607b8cc501b1ca0077a40cf4',
		'order': 43
	},
	{
		'adult': false,
		'gender': 1,
		'id': 1338706,
		'known_for_department': 'Acting',
		'name': 'Victoria Liu',
		'original_name': 'Victoria Liu',
		'popularity': 0.98,
		'profile_path': null,
		'cast_id': 209,
		'character': 'HEAV Pilot #3 (uncredited)',
		'credit_id': '607b8d162b8a43003fc56f24',
		'order': 44
	},
	{
		'adult': false,
		'gender': 2,
		'id': 2267140,
		'known_for_department': 'Acting',
		'name': 'Sonny Le',
		'original_name': 'Sonny Le',
		'popularity': 0.98,
		'profile_path': '/6ADWAGjO5ANMpp19Y7AlkWxNC8C.jpg',
		'cast_id': 211,
		'character': 'Thug (uncredited)',
		'credit_id': '607b8d55713ed40058d768a5',
		'order': 45
	},
	{
		'adult': false,
		'gender': 1,
		'id': 2969884,
		'known_for_department': 'Acting',
		'name': 'Santi Lawson',
		'original_name': 'Santi Lawson',
		'popularity': 0.6,
		'profile_path': '/sJyDK4U2984rtybdhh2rqZPbAAX.jpg',
		'cast_id': 212,
		'character': 'Apex Lab Tech (uncredited)',
		'credit_id': '607b8d7a7e34830058aa98fd',
		'order': 46
	}
]

export const defaultView = () => (
	<div style={{  height: '100vh', padding: '2rem' }}>
		<CarouselMain
			title='Trending'
			data={DATA}
		/>
	</div>
)

export const loadingView = () => (
	<div style={{ height: '100vh', padding: '2rem' }}>
		<CarouselMain
			title='Trending'
		/>
	</div>
)

export const withToggle = () => (
	<div style={{ height: '100vh', padding: '2rem' }}>
		<CarouselMain
			title='Trending'
			data={DATA}
			toggleOptions={[
				{ label: 'Option 1', value: 1 },
				{ label: 'Option 2', value: 2 }
			]}
		/>
	</div>
)

export const fetching = () => (
	<div style={{ height: '100vh', padding: '2rem' }}>
		<div style={{ height: '200vh' }}/>
		<Carousel
			title='Trending'
			toggleOptions={[
				{ label: 'Movies', value: '/movie/top_rated' },
				{ label: 'TV', value: '/tv/top_rated' }
			]}
		/>
	</div>
)

export const person = () => (
	<CarouselMain
		title='Cast'
		data={CAST}
	/>
)