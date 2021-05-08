import React from 'react'
import Carousel from './index'

export default { title: 'Carousel' }

const data = [
	{
		'video': false,
		'vote_average': 8.1,
		'overview': 'Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung\'s best warrior, Sub-Zero, seeks out and trains with Earth\'s greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.',
		'release_date': '2021-04-07',
		'title': 'Mortal Kombat',
		'adult': false,
		'backdrop_path': '/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg',
		'genre_ids': [
			14,
			28,
			12,
			878,
			53
		],
		'vote_count': 980,
		'original_language': 'en',
		'original_title': 'Mortal Kombat',
		'poster_path': '/2xmx8oPlbDaxTjHsIOZvOt5L3aJ.jpg',
		'id': 460465,
		'popularity': 4901.131,
		'media_type': 'movie'
	},
	{
		'overview': 'A three-person crew on a mission to Mars faces an impossible choice when an unplanned passenger jeopardizes the lives of everyone on board.',
		'release_date': '2021-04-22',
		'adult': false,
		'backdrop_path': '/lLUTG4e3asScennW3qryoXjG48Q.jpg',
		'vote_count': 147,
		'genre_ids': [
			18,
			878,
			53
		],
		'original_title': 'Stowaway',
		'original_language': 'en',
		'id': 559581,
		'poster_path': '/yOscLK7KzEPDdi1P8RmevGIjOSp.jpg',
		'title': 'Stowaway',
		'video': false,
		'vote_average': 6.4,
		'popularity': 138.557,
		'media_type': 'movie'
	},
	{
		'backdrop_path': '/8z9qQkx7wA6FXpLV8Tiw9mfsRFK.jpg',
		'first_air_date': '2021-04-23',
		'genre_ids': [
			10765
		],
		'id': 85720,
		'name': 'Shadow and Bone',
		'origin_country': [
			'US'
		],
		'original_language': 'en',
		'original_name': 'Shadow and Bone',
		'overview': 'In a world cleaved in two by a massive barrier of perpetual darkness, a young soldier uncovers a power that might finally unite her country. But as she struggles to hone her power, dangerous forces plot against her. Thugs, thieves, assassins and saints are at war now, and it will take more than magic to survive.',
		'poster_path': '/mrVoyDFiDSqfH4mkoRtccOv2vwh.jpg',
		'vote_average': 8.8,
		'vote_count': 60,
		'popularity': 125.209,
		'media_type': 'tv'
	},
	{
		'overview': 'Following the events of “Avengers: Endgame”, the Falcon, Sam Wilson and the Winter Soldier, Bucky Barnes team up in a global adventure that tests their abilities, and their patience.',
		'original_name': 'The Falcon and the Winter Soldier',
		'origin_country': [
			'US'
		],
		'backdrop_path': '/b0WmHGc8LHTdGCVzxRb3IBMur57.jpg',
		'genre_ids': [
			10765,
			10759,
			18,
			10768
		],
		'vote_count': 4726,
		'first_air_date': '2021-03-19',
		'id': 88396,
		'poster_path': '/6kbAMLteGO8yyewYau6bJ683sw7.jpg',
		'vote_average': 7.9,
		'original_language': 'en',
		'name': 'The Falcon and the Winter Soldier',
		'popularity': 6980.83,
		'media_type': 'tv'
	},
	{
		'title': 'Godzilla vs. Kong',
		'adult': false,
		'backdrop_path': '/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg',
		'id': 399566,
		'original_language': 'en',
		'original_title': 'Godzilla vs. Kong',
		'poster_path': '/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg',
		'video': false,
		'vote_average': 8.2,
		'vote_count': 4886,
		'overview': 'In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.',
		'release_date': '2021-03-24',
		'genre_ids': [
			28,
			878
		],
		'popularity': 4853.228,
		'media_type': 'movie'
	},
	{
		'video': false,
		'vote_average': 8.5,
		'overview': 'Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor — a "nobody." When two thieves break into his home one night, Hutch\'s unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind.',
		'release_date': '2021-03-18',
		'vote_count': 735,
		'adult': false,
		'backdrop_path': '/6zbKgwgaaCyyBXE4Sun4oWQfQmi.jpg',
		'title': 'Nobody',
		'genre_ids': [
			28,
			53,
			80
		],
		'id': 615457,
		'original_language': 'en',
		'original_title': 'Nobody',
		'poster_path': '/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg',
		'popularity': 2703.802,
		'media_type': 'movie'
	},
	{
		'adult': false,
		'backdrop_path': '/5Zv5KmgZzdIvXz2KC3n0MyecSNL.jpg',
		'genre_ids': [
			28,
			53,
			80
		],
		'id': 634528,
		'original_language': 'en',
		'original_title': 'The Marksman',
		'overview': 'Jim Hanson’s quiet life is suddenly disturbed by two people crossing the US/Mexico border – a woman and her young son – desperate to flee a Mexican cartel. After a shootout leaves the mother dead, Jim becomes the boy’s reluctant defender. He embraces his role as Miguel’s protector and will stop at nothing to get him to safety, as they go on the run from the relentless assassins.',
		'poster_path': '/6vcDalR50RWa309vBH1NLmG2rjQ.jpg',
		'release_date': '2021-01-15',
		'title': 'The Marksman',
		'video': false,
		'vote_average': 7.1,
		'vote_count': 157,
		'popularity': 2579.794,
		'media_type': 'movie'
	},
	{
		'original_title': 'The Courier',
		'poster_path': '/zFIjKtZrzhmc7HecdFXXjsLR2Ig.jpg',
		'video': false,
		'id': 522241,
		'overview': 'Cold War spy Greville Wynne and his Russian source try to put an end to the Cuban Missile Crisis.',
		'release_date': '2021-03-18',
		'title': 'The Courier',
		'adult': false,
		'backdrop_path': '/3pIqd1hgZ2xqzWEyiYp4blqE9Fi.jpg',
		'vote_count': 36,
		'genre_ids': [
			18,
			53
		],
		'vote_average': 6.8,
		'original_language': 'en',
		'popularity': 100.847,
		'media_type': 'movie'
	},
	{
		'poster_path': '/66GUmWpTHgAjyp4aBSXy63PZTiC.jpg',
		'video': false,
		'vote_average': 7.5,
		'overview': 'A woman in her sixties embarks on a journey through the western United States after losing everything in the Great Recession, living as a van-dwelling modern-day nomad.',
		'release_date': '2021-01-29',
		'id': 581734,
		'adult': false,
		'backdrop_path': '/bjjZXrP8PEdFeJkKERc62xlarMI.jpg',
		'title': 'Nomadland',
		'genre_ids': [
			18,
			37
		],
		'vote_count': 557,
		'original_language': 'en',
		'original_title': 'Nomadland',
		'popularity': 269.722,
		'media_type': 'movie'
	},
	{
		'vote_average': 1,
		'overview': 'A lonesome stranger with nerves of steel must track down and kill a rogue hitman to satisfy an outstanding debt. But the only information he\'s been given is a time and location where to find his quarry. No name. No description. Nothing.',
		'release_date': '2021-04-30',
		'adult': false,
		'backdrop_path': '/wio5x2etYayFz8TYSoi3PvpzFcK.jpg',
		'vote_count': 1,
		'genre_ids': [
			53,
			28,
			80
		],
		'id': 808023,
		'original_language': 'en',
		'original_title': 'The Virtuoso',
		'poster_path': '/8RIjjmWZi8tJf5lRxyHGErentsv.jpg',
		'title': 'The Virtuoso',
		'video': false,
		'popularity': 25.668,
		'media_type': 'movie'
	},
	{
		'original_language': 'en',
		'original_title': 'Zack Snyder\'s Justice League',
		'poster_path': '/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg',
		'video': false,
		'vote_average': 8.5,
		'id': 791373,
		'release_date': '2021-03-18',
		'vote_count': 5114,
		'title': 'Zack Snyder\'s Justice League',
		'adult': false,
		'backdrop_path': '/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg',
		'overview': 'Determined to ensure Superman\'s ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.',
		'genre_ids': [
			28,
			12,
			14,
			878
		],
		'popularity': 2788.708,
		'media_type': 'movie'
	},
	{
		'original_language': 'en',
		'original_title': 'Love and Monsters',
		'poster_path': '/r4Lm1XKP0VsTgHX4LG4syAwYA2I.jpg',
		'video': false,
		'vote_average': 7.4,
		'id': 590223,
		'release_date': '2020-10-16',
		'vote_count': 1516,
		'title': 'Love and Monsters',
		'adult': false,
		'backdrop_path': '/lA5fOBqTOQBQ1s9lEYYPmNXoYLi.jpg',
		'overview': 'Seven years since the Monsterpocalypse began, Joel Dawson has been living underground in order to survive. But after reconnecting over radio with his high school girlfriend Aimee, Joel decides to venture out to reunite with her, despite all the dangerous monsters that stand in his way.',
		'genre_ids': [
			35,
			28,
			12,
			14
		],
		'popularity': 316.921,
		'media_type': 'movie'
	},
	{
		'title': 'Judas and the Black Messiah',
		'adult': false,
		'backdrop_path': '/fatz1aegtBGh7KS0gipcsw9MqUn.jpg',
		'id': 583406,
		'original_language': 'en',
		'original_title': 'Judas and the Black Messiah',
		'poster_path': '/iIgr75GoqFxe1X5Wz9siOODGe9u.jpg',
		'video': false,
		'vote_average': 7.5,
		'vote_count': 444,
		'overview': 'Bill O\'Neal infiltrates the Black Panthers on the orders of FBI Agent Mitchell and J. Edgar Hoover. As Black Panther Chairman Fred Hampton ascends—falling for a fellow revolutionary en route—a battle wages for O’Neal’s soul.',
		'release_date': '2021-02-12',
		'genre_ids': [
			18,
			36
		],
		'popularity': 147.744,
		'media_type': 'movie'
	},
	{
		'original_title': 'Trigger Point',
		'poster_path': '/2YlS6d7tBVUNstYGkjTv1JmHzF3.jpg',
		'video': false,
		'vote_average': 7.5,
		'overview': 'Nicolas Shaw is a retired U.S. special operative who becomes part of an elite \'invisible\' team that quietly takes out the worst villains around the world.',
		'release_date': '2021-04-23',
		'id': 809314,
		'adult': false,
		'backdrop_path': '/jWMWZ2ttg8B8YtVzG04UfhlcL67.jpg',
		'vote_count': 2,
		'genre_ids': [
			28,
			53
		],
		'title': 'Trigger Point',
		'original_language': 'en',
		'popularity': 111.839,
		'media_type': 'movie'
	},
	{
		'video': false,
		'vote_average': 8.3,
		'overview': 'Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.',
		'release_date': '2021-03-03',
		'vote_count': 2418,
		'adult': false,
		'backdrop_path': '/7prYzufdIOy1KCTZKVWpjBFqqNr.jpg',
		'title': 'Raya and the Last Dragon',
		'genre_ids': [
			16,
			12,
			14,
			10751,
			28
		],
		'id': 527774,
		'original_language': 'en',
		'original_title': 'Raya and the Last Dragon',
		'poster_path': '/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg',
		'popularity': 1692.104,
		'media_type': 'movie'
	},
	{
		'origin_country': [
			'IT'
		],
		'overview': 'A teenager who can make herself invisible is used by an idiot to take control of the neighborhood and then meets a mysterious art student.',
		'vote_count': 19,
		'backdrop_path': '/bi8hQxzS1Ekgepzh5V2D2eg3Cxh.jpg',
		'vote_average': 7.8,
		'genre_ids': [
			10765
		],
		'name': 'Zero',
		'id': 119861,
		'first_air_date': '2021-04-21',
		'poster_path': '/843MWmiaoMOrfnM2kPC96KfLUkt.jpg',
		'original_language': 'it',
		'original_name': 'Zero',
		'popularity': 73.948,
		'media_type': 'tv'
	},
	{
		'title': 'Promising Young Woman',
		'adult': false,
		'backdrop_path': '/rWrvcsrvISKXdMOzCdkvU3Jtg0j.jpg',
		'id': 582014,
		'original_language': 'en',
		'original_title': 'Promising Young Woman',
		'poster_path': '/cjzU4g6SlScnP4MdkleyI25KGlR.jpg',
		'video': false,
		'vote_average': 7.6,
		'vote_count': 796,
		'overview': 'A young woman, traumatized by a tragic event in her past, seeks out vengeance against those who crossed her path.',
		'release_date': '2020-12-13',
		'genre_ids': [
			53,
			80,
			18
		],
		'popularity': 141.399,
		'media_type': 'movie'
	},
	{
		'title': 'Vanquish',
		'adult': false,
		'backdrop_path': '/mb3fcmQzXd8aUf7r6izZfMHSJmz.jpg',
		'id': 804435,
		'original_language': 'en',
		'original_title': 'Vanquish',
		'poster_path': '/AoWY1gkcNzabh229Icboa1Ff0BM.jpg',
		'video': false,
		'vote_average': 6.1,
		'vote_count': 30,
		'overview': 'Victoria is a young mother trying to put her dark past as a Russian drug courier behind her, but retired cop Damon forces Victoria to do his bidding by holding her daughter hostage. Now, Victoria must use guns, guts and a motorcycle to take out a series of violent gangsters—or she may never see her child again.',
		'release_date': '2021-04-16',
		'genre_ids': [
			28,
			80,
			53
		],
		'popularity': 344.795,
		'media_type': 'movie'
	},
	{
		'overview': 'Two unlikely companions embark on a perilous adventure through the badlands of an unexplored planet as they try to escape a dangerous and disorienting reality, where all inner thoughts are seen and heard by everyone.',
		'release_date': '2021-02-24',
		'title': 'Chaos Walking',
		'id': 412656,
		'adult': false,
		'backdrop_path': '/ovggmAOu1IbPGTQE8lg4lBasNC7.jpg',
		'genre_ids': [
			878,
			28,
			12,
			53
		],
		'original_language': 'en',
		'original_title': 'Chaos Walking',
		'poster_path': '/9kg73Mg8WJKlB9Y2SAJzeDKAnuB.jpg',
		'vote_count': 439,
		'video': false,
		'vote_average': 7.4,
		'popularity': 1996.332,
		'media_type': 'movie'
	},
	{
		'vote_average': 6.9,
		'overview': 'After his grandfather\'s death, a young man decides to fulfill his elder\'s last wish with the help of his new friends. The problem starts when he falls in love with a female friend who may not feel the same.',
		'release_date': '2020-12-25',
		'adult': false,
		'backdrop_path': '/7W2ob4ALcwstMFdRfwLrcjUIHmx.jpg',
		'vote_count': 10,
		'genre_ids': [
			18,
			10749
		],
		'id': 676859,
		'original_language': 'es',
		'original_title': 'Dime cuando tú',
		'poster_path': '/6XVcNvXQoa0z1QPQOr1Dd0ZHPAd.jpg',
		'title': 'Tell Me When',
		'video': false,
		'popularity': 16.654,
		'media_type': 'movie'
	}
]

export const defaultView = () => (
	<div style={{  height: '100vh', padding: '2rem' }}>
		<Carousel
			title='Trending'
			data={data}
		/>
	</div>
)

export const loadingView = () => (
	<div style={{ height: '100vh', padding: '2rem' }}>
		<Carousel title='Trending' />
	</div>
)