import { ADD_PRODUCT_CART, CLEAR_CART, REMOVE_CART_ITEM, PLUS_CART_ITEM, MINUS_CART_ITEM } from '../actions/cart';


const initialState = {
	items: {},
}

const cart = (state = initialState, action) => {
	switch (action.type) {

		case ADD_PRODUCT_CART: {

			const { payload } = action;
			const { id } = payload;

			const currenProductItems = !state.items[id] ? [payload] : [...state.items[id].items, payload];
			const newItems = { ...state.items, [id]: { items: currenProductItems } };

			return { ...state, items: newItems };
		}

		case CLEAR_CART:
			return { items: {} };

		case REMOVE_CART_ITEM: {

			const newItems = { ...state.items }
			delete newItems[action.payload];

			return { ...state.items, items: newItems };
		}
		case PLUS_CART_ITEM: {
			const id = action.payload;
			const newItems = [...state.items[id].items, state.items[id].items[0]];
			return {
				...state,
				items: {
					...state.items,
					[id]: {
						items: newItems,
					},
				},
			};
		}
		case MINUS_CART_ITEM: {
			const id = action.payload;
			const oldItems = state.items[id].items;
			const newItems = oldItems.length > 1 ? state.items[id].items.slice(1) : oldItems;
			return {
				...state,
				items: {
					...state.items,
					[id]: {
						items: newItems,
					},
				},
			};
		}
		default:
			return state;
	}
};

export default cart;
