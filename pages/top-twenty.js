import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import { setActivePageRoute, setIsPageRenderedOnServer } from '../application/application.actions';
import { setGenres, setCurrentGenreId, setAlbumEntries } from '../modules/topTwentyAlbums/topTwentyAlbums.actions';

import * as ITunesService from "../modules/topTwentyAlbums/services/iTunes.service";

import TopTwentyAlbums from '../modules/topTwentyAlbums/topTwentyAlbums';

class TopTwentyAlbumsPage extends Component {
  static async getInitialProps ({ reduxStore, req, query }) {
    const isServer = !!req

    reduxStore.dispatch(setActivePageRoute('top-twenty'));
    reduxStore.dispatch(setIsPageRenderedOnServer(isServer));

    /* break down the thunk flow according to the async api calls */

    const genres = await ITunesService.getGenres();

    if (genres && genres[0]) {
      reduxStore.dispatch(setGenres(genres));

      const genreId = genres[0].id;

      reduxStore.dispatch(setCurrentGenreId(genreId));

      const albumEntries = await ITunesService.getTopTwentyAlbumsByGenreId(genreId);
      
      reduxStore.dispatch(setAlbumEntries(albumEntries));
    }

    return {};
  }

  render () {
    return (
      <TopTwentyAlbums />
    )
  }
}

export default connect()(TopTwentyAlbumsPage)