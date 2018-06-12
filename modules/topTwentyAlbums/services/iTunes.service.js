import Promise from 'es6-promise';
import fetch from 'isomorphic-fetch';

const ITUNES_GET_TOP_ALBUMS = 'https://itunes.apple.com/us/rss/topalbums/limit=20/genre=14/json';

export async function getGenres() {
	// iTunes rss api doesn't really have a genres endpoint, using a mockup to simulate it
	const response = await import('../../../mockups/iTunesGenres.mockup.json');
	return response.genres;
}

export function getTopTwentyAlbumsByGenreId(genreId) {
	return new Promise((resolve, reject) => {
		if (isNaN(genreId) || genreId < 0) { reject('getTopTwentyAlbumsByGenreId error'); }
		else {
			let iTunesGetTopAlbumsApi = ITUNES_GET_TOP_ALBUMS.replace('genre=14', `genre=${genreId}`);
			fetch(iTunesGetTopAlbumsApi, {
				method: 'get'
			}).then((response) => {
				let contentType = response.headers.get("content-type");
				if(contentType && contentType.includes('text/javascript')) {
					response.json().then((json) => {
						if (json.feed && json.feed.entry) {
							resolve(json.feed.entry);
						} else {
							reject('getTopTwentyAlbumsByGenreId error');
						}
					}).catch((err) => {
						// error
						reject(err);
					});
				}
			}).catch((err) => {
				// error
				reject(err);
			});
		}
	});
}