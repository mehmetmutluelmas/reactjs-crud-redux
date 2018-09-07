import { 
	FETCH_AUTHORIZATIONS_FULFILLED,
	FETCH_AUTHORIZATIONS_REJECTED,
	FETCH_AUTHORIZATIONS_PENDING,

} from '../actions/authorizationsAction'

const initialState = {
		fetching: false,
		data: [],
		errorDb: '',
		errorApi: '',
		done: false
}


export default (state = initialState, action) => {
	switch (action.type){

		//FETCH AUTHORIZATIONS
		case FETCH_AUTHORIZATIONS_PENDING:
			return {
				//...state,
				fetching: true,
				data: [],
				errorDb: '',
				errorApi: ''
			}
		case FETCH_AUTHORIZATIONS_FULFILLED:
			return {
				fetching: false,
				data: action.payload.authorizations,
				errorDb: action.payload.error,
				errorApi: '',
			}
		case FETCH_AUTHORIZATIONS_REJECTED:
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