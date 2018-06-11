import { SET_GENRES, SET_ALBUM_ENTRIES, SET_CURRENT_GENRE_ID } from './topTwentyAlbums.actions';

export const initialState = {
    genres: [],
    albumEntries: [],
    currentGenreId: null
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_GENRES:
      return { ...state, genres: action.genres };
    case SET_ALBUM_ENTRIES:
      return { ...state, albumEntries: action.albumEntries };
    case SET_CURRENT_GENRE_ID:
      return { ...state, currentGenreId: action.genreId };
    default:
      return state;
  }
}