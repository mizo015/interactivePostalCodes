import { REQUEST_LOCATIONS } from '../constants/ActionTypes'


export default function locations(state = [], action){
	console.log("LOCATIONS REDUCER CALLED");
	
	switch (action.type) {
		case REQUEST_LOCATIONS:
			return [{id:0, name:"Edison, NJ"}, {id:1, name:"Woodbridge, NJ"}]
		default:
			return state;
	}

}