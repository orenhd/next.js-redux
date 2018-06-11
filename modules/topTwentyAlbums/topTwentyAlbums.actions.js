import * as ITunesService from "./services/iTunes.service";

export const SET_GENRES = 'SET_GENRES';
export const setGenres = (genres) => {
    return {
        type: SET_GENRES,
        genres
    }
}

export const SET_ALBUM_ENTRIES = 'SET_ALBUM_ENTRIES';
export const setAlbumEntries = (albumEntries) => {
    return {
        type: SET_ALBUM_ENTRIES,
        albumEntries
    }
}

export const SET_CURRENT_GENRE_ID = 'SET_CURRENT_GENRE_ID';
export const setCurrentGenreId = (genreId) => {
    return {
        type: SET_CURRENT_GENRE_ID,
        genreId
    }
}

export const loadGenreIds = () => (dispatch, getState) => {
    const { topTwentyAlbums } = getState();

    if (!topTwentyAlbums.currentGenreId)
        ITunesService.getGenres().then((genres) => {
            dispatch(setGenres(genres));
            if (genres && genres[0] && !topTwentyAlbums.currentGenreId) {
                //loading genre ids is always followed by loading the selected genre albums list
                dispatch(loadAlbumEntriesByGenreId(genres[0].id));
            }
        })
}

export const loadAlbumEntriesByGenreId = (genreId) => (dispatch, getState) => {
    ITunesService.getTopTwentyAlbumsByGenreId(genreId).then((albumEntries) => {
        dispatch(setCurrentGenreId(genreId));
        dispatch(setAlbumEntries(albumEntries));
    });
}