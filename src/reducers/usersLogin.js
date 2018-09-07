import { VISIBLE } from '../actions/login'

const initialState = {
	visible: false
}
export default (state = initialState, { type, payload }) => {
	switch (type){
		case VISIBLE:
			return {
				visible: payload.visible
			}
		default:
			return state;
	}
}