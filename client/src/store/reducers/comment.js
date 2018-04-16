import { GET_COMMENTS } from '../actions/constants'

const commentReducer = (state = [], { type, payload }) => {
	switch (type) {
		case GET_COMMENTS:
			return payload;
		default:
			return state;
	}
}

export default commentReducer;
