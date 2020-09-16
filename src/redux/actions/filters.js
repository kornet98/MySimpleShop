export const SET_SORT_BY = 'SET_SORT_BY';
export const SET_ORDER_BY = 'SET_ORDER_BY';


export const setSortBy = (type) => ({
	type: 'SET_SORT_BY',
	payload: type,
});
export const setOrderBy = (order) => ({
	type: 'SET_ORDER_BY',
	payload: order,
});


