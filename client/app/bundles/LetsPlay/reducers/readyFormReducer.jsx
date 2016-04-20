import Immutable from 'immutable';

import actionTypes from '../constants/readyFormConstants';

export const $$initialState = Immutable.fromJS({
  ready_in: "1 minute", // this is the default state that would be used if one were not passed into the store
});

export default function gameSelectReducer($$state = $$initialState, action) {
  const {type, data} = action;

  switch (type) {
    case actionTypes.READY_USER_UPDATE:
      App.user_games.update_ready_in({ready_in: data.ready_in})

    case actionTypes.CABLE_UPDATE_USER_READY:
      $$state.set('ready_in', "server's return val")

    default:
      return $$state;
  }
}
