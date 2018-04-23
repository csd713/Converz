import { GET_COMMENTS, SAVE_COMMENT, GET_COMMENT } from '../actions/constants'

const commentReducer = (state = [], { type, payload }) => {
	switch (type) {
		case GET_COMMENTS:
			return payload;
		case GET_COMMENT:
			const index = state.findIndex(item => item._id === payload._id);
			if (index > -1) {
				return state.map(item => {
					if (item._id === payload._id) {
						return payload;
					}
					return item;
				});
			} else {
				return [
					...state,
					payload
				];
			}
		case SAVE_COMMENT:
			return [...state, payload]
		default:
			return state;
	}
}

export default commentReducer;
