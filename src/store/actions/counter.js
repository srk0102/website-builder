import { mapItemsToStore, mapViewToStore, mapCartToStore, mapUpdateCartToStore } from './action'

export function sendItemsToStore(data) {
  return function (dispatch) {
    dispatch(mapItemsToStore(data));
  }
}

export function sendViewToStore(data) {
  return function (dispatch) {
    dispatch(mapViewToStore(data));
  }
}

export function sendCartToStore(data) {
  return function (dispatch) {
    dispatch(mapCartToStore(data));
  }
}

export function updateCartToStore(data){
  return function (dispatch) {
    dispatch(mapUpdateCartToStore(data));
  }
}