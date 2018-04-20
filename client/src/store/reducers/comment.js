import { GET_COMMENTS, SAVE_COMMENT } from '../actions/constants'

const commentReducer = (state = [], { type, payload }) => {
	switch (type) {
		case GET_COMMENTS:
			return payload;
		case SAVE_COMMENT:
			return [...state, payload]
		default:
			return state;
	}
}

export default commentReducer;
