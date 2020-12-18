/* eslint-disable semi */
/* eslint-disable import/prefer-default-export */
// TODO: add and export your own actions
import cities from '../data';

export function setCities() {
  return {
    type: 'SET_CITIES',
    payload: cities
  }
}

export function selectCity(city) {
  return {
    type: 'CITY_SELECTED',
    payload: city
  }
}
