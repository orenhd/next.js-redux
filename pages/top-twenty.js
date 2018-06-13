import React, { Component } from 'react';
import { Router } from '../routes/site.routes';
import { connect } from 'react-redux';

import { setActivePageRoute, setIsPageRenderedOnServer } from '../application/application.actions';
import { setGenres, setCurrentGenreId, setAlbumEntries } from '../modules/topTwentyAlbums/topTwentyAlbums.actions';

import * as ITunesService from "../modules/topTwentyAlbums/services/iTunes.service";

import TopTwentyAlbums from '../modules/topTwentyAlbums/topTwentyAlbums';

class TopTwentyAlbumsPage extends Component {
  static async getInitialProps (ddd) {
    const { reduxStore, req, res, query } = ddd;
    const isServer = !!req;

    reduxStore.dispatch(setActivePageRoute('top-twenty'));
    reduxStore.dispatch(setIsPageRenderedOnServer(isServer));

    /* break down the thunk flow according to the async api calls */

    const genres = await ITunesService.getGenres();

    if (!genres || !genres[0]) return {};

    const genresIds = genres.map((genre) => { return genre.id });

    reduxStore.dispatch(setGenres(genres));

    if (!query.genreId || !genresIds.includes(parseInt(query.genreId))) {
      // redirect to topTwentyAlbums at the first genre received
      if (isServer) {
          res.writeHead(307, {Location: `/top-twenty/${genres[0].id}`}); // 307 - temporary URL redirection
          res.end()
      } else {
          Router.pushRoute('top-twenty', { genreId: genres[0].id }); 
      }
    }

    const genreId = parseInt(query.genreId) || genres[0].id;

    reduxStore.dispatch(setCurrentGenreId(genreId));

    const albumEntries = await ITunesService.getTopTwentyAlbumsByGenreId(genreId);
    
    reduxStore.dispatch(setAlbumEntries(albumEntries));

    return {};
  }

  render () {
    return (
      <TopTwentyAlbums />
    )
  }
}

export default connect()(TopTwentyAlbumsPage)