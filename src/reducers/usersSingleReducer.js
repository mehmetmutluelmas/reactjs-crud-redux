import { 


	SINGLE_FETCH_USERS_PENDING,
	SINGLE_FETCH_USERS_FULFILLED,
	SINGLE_FETCH_USERS_REJECTED,


} from '../actions/usersAction'

const initialState = {
		fetching: false,
		singleData: [],
		errorDb: '',
		errorApi: '',
		done: false
}


export default (state = initialState, action) => {
	switch (action.type){


		//SINGLE FETCH USERS
		case SINGLE_FETCH_USERS_PENDING:
			return {
					//...state,
				fetching: true,
				singleData: [],
				errorDb: '',
				errorApi: ''
			}
		case SINGLE_FETCH_USERS_FULFILLED:
			return {
				fetching: false,
				singleData: action.payload.users,
				errorDb: action.payload.error,
				errorApi: '',
			}
		case SINGLE_FETCH_USERS_REJECTED:
			return {
				fetching: false,
				data: [],
				singleData: [],
				errorDb: '',
				errorApi: action.payload, 
			}

		default:
			return state;
	}
} 