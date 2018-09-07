import { 

	DELETE_USERS_PENDING,
	DELETE_USERS_FULFILLED,
	DELETE_USERS_REJECTED,

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

		//DELETE USERS
		case DELETE_USERS_PENDING:
			return {
				fetching: true,
				data: [],
				errorDb: '',
				errorApi: '',
				done: false
			}
		case DELETE_USERS_FULFILLED:
			return {
				fetching: false,
				data: [],
				errorDb: action.payload.error,
				errorApi: '',
				done: true
			}
		case DELETE_USERS_REJECTED:
			return {
				fetching: false,
				data: [],
				errorDb: '',
				errorApi: action.payload,
				done: true
			}
		default:
			return state;
	}
} 