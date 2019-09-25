interface Actions {
	type: String;
}

const renameReducer = (state: number = 0, action: Actions) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
};

export default renameReducer;
