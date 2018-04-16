export default function commentReducer(state = [], action) {
	switch (action.type) {
		case 'CREATE_COMMENT':
			state.push(action.comment);
			return [...state, Object.assign({}, action.comment)];

		default:
			return state;
	}
}