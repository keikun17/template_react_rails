import actionTypes from '../constants/readyFormConstants';


export function readyUpdate(data){
  return {
    type: 'READY_USER_UPDATE',
    data
  }
}

export function cableReadyUpdate(){
  return {
    type: 'CABLE_UPDATE_USER_READY'
  }
}

