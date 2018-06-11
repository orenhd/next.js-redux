import { createStore, applyMiddleware, combineReducers, Store, Action, compose } from 'redux';
import thunk from 'redux-thunk';

import * as application from './application.reducer';
import * as clickingExample from '../modules/clickingExample/clickingExample.reducer';
import * as topTwentyAlbums from '../modules/topTwentyAlbums/topTwentyAlbums.reducer';

const composeEnhancers = global.window && global.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? global.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

export function initializeStore(initialState = {
    application: application.initialState,
    clickingExample: clickingExample.initialState,
    topTwentyAlbums: topTwentyAlbums.initialState,
}) {
    return createStore(
        combineReducers({
            application: application.reducer,
            clickingExample: clickingExample.reducer,
            topTwentyAlbums: topTwentyAlbums.reducer
        }),
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );
}