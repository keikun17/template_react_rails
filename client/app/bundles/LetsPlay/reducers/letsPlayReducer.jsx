// import Immutable from 'immutable';
//
// import readyFormReducer from './readyFormReducer'
// import gameSelectReducer from './gameSelectReducer'
// import { $$initialState as $$readyFormState } from './readyFormReducer';
// import { $$initialState as $$gameSelectState } from './gameSelectReducer';
//
// import actionTypes from '../constants/gameSelectConstants';
//
// export const $$initialStates = {
//   $$gameSelectState,
//   $$readyFormState
// };
//
// // export default combineReducers({
// //   readyFormReducer,
// //   gameSelectReducer
// // })
// //
//
// export default function letsPlayReducer($$state = $$initialState, action) {
//   debugger
//   const { type, name } = action;
//
//   switch (type) {
//     case actionTypes.HELLO_WORLD_NAME_UPDATE:
//       return $$state.set('name', name);
//
//     default:
//       return $$state;
//   }
// }
//
//
