import { createSelector } from 'reselect';

import * as utils from './topTwentyAlbums.utils';

export const genresSelector = (state) => state.topTwentyAlbums.genres;

export const currentGenreIdSelector = (state) => state.topTwentyAlbums.currentGenreId;

export const albumEntriesSelector= (state) => state.topTwentyAlbums.albumEntries;

export const getCurrentGenre = createSelector(
    genresSelector,
    currentGenreIdSelector,
    (genres, genreId) => {
        let matchingGenres = genres.filter((genre) => genre.id === genreId);
        return matchingGenres[0];
    }
)

export const getAlbumEntriesList = createSelector(
    albumEntriesSelector,
    (albumEntries) => utils.mapToListAlbumEntries(albumEntries)
)