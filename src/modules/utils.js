export const getTotalItemPrice = arr => arr.reduce((sum, obj) => sum + obj.price, 0);

export const getTotalCount = (obj) => {
	return Object.keys(obj).reduce((sum, key) => obj[key].items.length + sum, 0);
}

export const getTotalPrice = (obj) => {
	return Object.keys(obj).reduce((sum, key) => getTotalItemPrice(obj[key].items) + sum, 0);
}

export const getNewId = arr => {
	const ids = arr.map(el => el.id);
	return Math.max(...ids) + 1;
};

export const isValid = (name, price, count) => {
	if (
		name.length < 1 ||
		!isNaN(name) ||
		price < 1 ||
		isNaN(price) ||
		count < 1 ||
		isNaN(count)
	) return false;

	return true
}