import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { getTotalItemPrice } from '../modules/utils';

const Button = styled.button`
	width: 25px;
	height: 25px;
	text-align: center;
	font-size: 18px;
	background-color: #222;
	color: #fff;
	border: 1px solid #222;
	margin: 10px;
	&:disabled{
		background: #fff;
		color: #222;
	}
`
const StyledCartItem = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
	align-items: center;
`
const CountWrapper = styled.div`
	width: 20%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const ProductName = styled.div`
	width: 30%;
`



const CartItem = ({ id, name, productItems, totalCount, onRemove, onMinus, onPlus, available }) => {

	const handleRemoveClick = () => {
		onRemove(id);
	}
	const handlePlusClick = () => {
		onPlus(id);
	}
	const handleMinusClick = () => {
		onMinus(id);
	}

	return (
		<StyledCartItem>
			<ProductName>{name}</ProductName>
			<CountWrapper>
				<Button onClick={handleMinusClick}>-</Button>
				<b>{totalCount}</b>
				<Button onClick={handlePlusClick} disabled={available ? false : true}>+</Button>
			</CountWrapper>
			<b>{getTotalItemPrice(productItems)} $</b>
			<Button onClick={handleRemoveClick}>X</Button>
		</StyledCartItem>
	)
}

CartItem.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	totalPrice: PropTypes.number,
	totalCount: PropTypes.number,
	onRemove: PropTypes.func,
	onMinus: PropTypes.func,
	onPlus: PropTypes.func,
	available: PropTypes.number,
}

CartItem.defaultProps = {
	name: '---',
	price: 0,
	available: 0,
}

export default CartItem;
