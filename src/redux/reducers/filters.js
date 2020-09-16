import { SET_SORT_BY, SET_ORDER_BY } from '../actions/filters'


const initialState = {
	sortBy: "name",
	orderBy: "asc"
}

const filters = (state = initialState, action) => {
	switch (action.type) {
		case SET_SORT_BY:
			return {
				...state,
				sortBy: action.payload
			};
		case SET_ORDER_BY:
			return {
				...state,
				orderBy: action.payload
			};

		default:
			return state;
	}
};

export default filters;
