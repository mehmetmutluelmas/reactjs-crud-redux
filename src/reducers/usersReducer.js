import { 
	FETCH_USERS_FULFILLED,
	FETCH_USERS_REJECTED,
	FETCH_USERS_PENDING,

} from '../actions/usersAction'

const initialState = {
		fetching: false,
		data: [],
		errorDb: '',
		errorApi: '',
		done: false
}


export default (state = initialState, action) => {
	switch (action.type){

		//FETCH USERS
		case FETCH_USERS_PENDING:
			return {
				//...state,
				fetching: true,
				data: [],
				errorDb: '',
				errorApi: ''
			}
		case FETCH_USERS_FULFILLED:
			return {
				fetching: false,
				data: action.payload.users,
				errorDb: action.payload.error,
				errorApi: '',
			}
		case FETCH_USERS_REJECTED:
			return {
				fetching: false,
				data: [],
				errorDb: '',
				errorApi: action.payload,
			}

		default:
			return state;
	}
} 