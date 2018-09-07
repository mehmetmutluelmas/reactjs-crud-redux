import { 

	UPDATE_USERS_PENDING,
	UPDATE_USERS_FULFILLED,
	UPDATE_USERS_REJECTED,

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

		//UPDATE USERS
		case UPDATE_USERS_PENDING:
			return {
				fetching: true,
				data: [],
				errorDb: '',
				errorApi: '',
				done: false
			}
		case UPDATE_USERS_FULFILLED:
			return {
				fetching: false,
				data: [],
				errorDb: action.payload.error,
				errorApi: '',
				done: true
			}
		case UPDATE_USERS_REJECTED:
			return {
				fetching: false,
				data: [],
				errorDb: '',
				errorApi: action.payload,
				done: false
			}
 
		default:
			return state;
	}
} 