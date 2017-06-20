import { REQUEST_LOCATIONS, ADD_LOCATION } from '../constants/ActionTypes'

export default function locations(state = {
	locationsList: [],
	selectedLocation: null,
	
}, action){
	console.log("LOCATIONS REDUCER CALLED");
	
	switch (action.type) {
		case ADD_LOCATION:
			return {...state, locationsList: [...state.locationsList, action.postalcode]}
		default:
			return state;
	}

}