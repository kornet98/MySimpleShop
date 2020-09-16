import axios from 'axios'

export const SET_PRODUCTS = 'SET_PRODUCTS';


export const fetchProducts = (sortBy, orderBy) => (dispatch) => {
	axios.get(`http://localhost:3001/products?&_sort=${sortBy}&_order=${orderBy}`).then(({ data }) => {
		dispatch(setProducts(data))
	}).catch(error => {
		console.log(error);
	});
};

export const postProduct = (obj) => (dispatch) => {
	axios.post(`http://localhost:3001/products`, obj).then(({ data }) => {
		dispatch(setProducts(data))
	}).catch(error => {
		console.log(error);
	});
};


export const setProducts = (items) => ({
	type: SET_PRODUCTS,
	payload: items
});
