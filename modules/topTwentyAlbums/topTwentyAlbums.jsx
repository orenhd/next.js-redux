import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PropTypes from "prop-types";

import { loadAlbumEntriesByGenreId } from './topTwentyAlbums.actions';
import { getCurrentGenre, getAlbumEntriesList } from './topTwentyAlbums.selectors';

import * as dataTypes from './topTwentyAlbums.dataTypes';
import * as viewTypes from './topTwentyAlbums.viewTypes';

import GenreSelectionBar from './components/genreSelectionBar';
import AlbumsList from './components/albumsList';

class TopTwentyAlbums extends PureComponent {

    /* Lifecycle Methods */

    /* Class Methods */

    loadAlbumEntriesByGenreId = (genreId) => {
        this.props.loadAlbumEntriesByGenreId(genreId);
    }

    render() {
        return <div className="top-twenty-albums">
            <GenreSelectionBar 
                genres={this.props.genres} 
                currentGenre={this.props.currentGenre}
                genreSelectedHandler={this.loadAlbumEntriesByGenreId}
            />
            <AlbumsList
                albumEntriesList={this.props.albumEntriesList}
            />
        </div>
    }
}

TopTwentyAlbums.propTypes = {
    genres: PropTypes.arrayOf(dataTypes.ITunesGenre).isRequired,
    currentGenre: dataTypes.ITunesGenre,
    albumEntriesList: PropTypes.arrayOf(viewTypes.AlbumEntryListItem).isRequired,
    loadAlbumEntriesByGenreId: PropTypes.func
}

const mapStateToProps = (state) => {
    const { topTwentyAlbums } = state;
    return {
        genres: topTwentyAlbums.genres,
        currentGenre: getCurrentGenre(state),
        albumEntriesList: getAlbumEntriesList(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loadAlbumEntriesByGenreId
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TopTwentyAlbums);