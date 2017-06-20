import { REQUEST_LOCATIONS, SELECT_LOCATION, ADD_LOCATION } from '../constants/ActionTypes'
import { createAction } from 'redux-actions'

export const requestLocations = createAction(REQUEST_LOCATIONS);
export const selectLocation = createAction(SELECT_LOCATION);
export const addLocation = createAction(ADD_LOCATION)
