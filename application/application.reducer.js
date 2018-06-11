import { SET_ACTIVE_PAGE_ROUTE, SET_IS_PAGE_RENDERED_ON_SERVER } from './application.actions';

export const initialState = {
    activePageRoute: null,
    isPageRenderedOnServer: null,
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_PAGE_ROUTE:
      return { ...state, activePageRoute: action.activePageRoute };
    case SET_IS_PAGE_RENDERED_ON_SERVER:
      return { ...state, isPageRenderedOnServer: action.isPageRenderedOnServer };
    default:
      return state;
  }
}