export const ADD_PRODUCT_CART = 'ADD_PRODUCT_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const PLUS_CART_ITEM = 'PLUS_CART_ITEM';
export const MINUS_CART_ITEM = 'MINUS_CART_ITEM';

export const addProductToCart = productObj => ({
	type: ADD_PRODUCT_CART,
	payload: productObj
})
export const clearCart = () => ({
	type: CLEAR_CART
})
export const removeCartItem = id => ({
	type: REMOVE_CART_ITEM,
	payload: id
})
export const plusCartItem = id => ({
	type: PLUS_CART_ITEM,
	payload: id
})
export const minusCartItem = id => ({
	type: MINUS_CART_ITEM,
	payload: id
})
