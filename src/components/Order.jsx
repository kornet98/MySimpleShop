import React from 'react';
import PropTypes from 'prop-types';


const Order = ({ totalPrice }) => {
	return (
		<div>
			<h2>Your shopping was successful</h2>
			<h3>Total sum: {totalPrice} $</h3>
		</div>
	)
}


Order.propTypes = {
	totalPrice: PropTypes.number
}
Order.defaultProps = {
	totalPrice: 0
}

export default React.memo(Order);