import React, { useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import styled from 'styled-components';

import { CartItem, Order } from '../components'
import { clearCart, removeCartItem, plusCartItem, minusCartItem } from '../redux/actions/cart';

import { getTotalCount, getTotalPrice } from '../modules/utils';


const CartEmpty = styled.div`
   width: 100%;
   text-align: center;
`;
const CartBtn = styled.button`
	width: 200px;
	color: #fff;
	border: 1px solid #222;
	background-color: #222;
	border-radius: 5px;
	padding: 10px;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 2px;
`;

const CartDetails = styled.div`
	margin-bottom: 30px;
	width: 100%;
	display: flex;
	justify-content: space-between;
`
const CartList = styled.ul`
	margin: 20px 0 100px;	
`
const CartBottom = styled.div`
	margin-bottom: 50px;	
`

function Cart() {

	const [isBuyPressed, setIsBuyPressed] = useState(false)

	const dispatch = useDispatch()

	const { items } = useSelector(({ cart }) => cart, shallowEqual)

	const addedProducts = Object.keys(items).map(key => items[key].items[0]);
	const totalPrice = getTotalPrice(items);
	const totalCount = getTotalCount(items);

	const onClearCart = () => {
		if (window.confirm("Are you sure you want to delete all selected items?")) {
			dispatch(clearCart())
		}
	}
	const onPlusItem = (id) => {
		dispatch(plusCartItem(id))
	}
	const onMinusItem = (id) => {
		dispatch(minusCartItem(id))
	}

	const onRemoveCartItem = (id) => {
		if (window.confirm("Are you sure you want to delete this item from the cart?")) {
			dispatch(removeCartItem(id))
		}
	}
	const onClickOrder = () => {
		setIsBuyPressed(true);
		console.log("Your order: ", items);
	}

	return (
		<div>
			{
				totalCount ?
					<div>
						<CartBtn onClick={onClearCart}>Clear cart</CartBtn>
						<CartList>
							{
								addedProducts.map((obj) => (
									<CartItem
										key={obj.id}
										available={items[obj.id] ? obj.available - items[obj.id].items.length : obj.available}
										id={obj.id}
										name={obj.name}
										productItems={items[obj.id].items}
										totalCount={items[obj.id].items.length}
										onRemove={onRemoveCartItem}
										onPlus={onPlusItem}
										onMinus={onMinusItem}
									/>
								))
							}
						</CartList>
						<CartBottom>
							<CartDetails>
								<span> Total products count: <b>{totalCount} </b> </span>
								<span> Total products price: <b>{totalPrice} $</b> </span>
							</CartDetails>
							<CartBtn onClick={onClickOrder}>
								Buy now
							</CartBtn>
						</CartBottom>
						{isBuyPressed && <Order
							addedProducts={addedProducts}
							totalPrice={totalPrice}
							items={items}
						/>}
					</div> :
					<CartEmpty>
						<h2>Cart empty</h2>
						<p>
							You have not ordered anything yet.<br />
							To order the product, go to the main page.
			 			</p>
					</CartEmpty>
			}
		</div>
	)
}

export default React.memo(Cart);
