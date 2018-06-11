import { SET_USER_NAME, UPDATE_CLICKING_DATA } from './clickingExample.actions';

export const initialState = {
  userName: 'World',
  clickingData: {}
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_NAME:
      return { ...state, userName: action.userName };
    case UPDATE_CLICKING_DATA:
      return { ...state, clickingData: action.clickingData };
    default:
      return state;
  }
}