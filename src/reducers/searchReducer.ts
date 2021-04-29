import { GET_SEARCH } from "../actions/actionTypes";

type searchAction = {
	type: string;
	payload: Array<object>;
};
const searchReducer = (state = [], action: searchAction) => {
	switch (action.type) {
		case GET_SEARCH:
			return [...state, ...action.payload];

		default:
			return state;
	}
};

export default searchReducer;
