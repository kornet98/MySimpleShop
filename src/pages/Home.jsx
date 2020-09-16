import React, { useCallback } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import styled from 'styled-components';

import { SortPopup, ProductBlock } from '../components';

import { setSortBy, setOrderBy } from '../redux/actions/filters';
import { addProductToCart } from '../redux/actions/cart';
import { fetchProducts } from '../redux/actions/products';


const SortWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 20px;
`
const ProductList = styled.ul`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: flex-start;
`
const Button = styled.button`
	width: 70px;
	color: #fff;
	border: 1px solid #222;
	background-color: #222;
	border-radius: 5px;
	padding: 8px;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 2px;
`

const sortItems = [
	{ name: 'name', type: 'name' },
	{ name: 'price', type: 'price' },
	{ name: 'available', type: 'available' }
]

function Home() {
	const dispatch = useDispatch();
	const items = useSelector(({ products }) => products.items, shallowEqual);
	const cartItems = useSelector(({ cart }) => cart.items, shallowEqual);
	const { sortBy, orderBy } = useSelector(({ filters }) => filters);

	React.useEffect(() => {
		dispatch(fetchProducts(sortBy, orderBy))
	}, [sortBy, orderBy]);

	const onSelectSortType = useCallback(type => {
		dispatch(setSortBy(type));
	}, [])

	const handleUp = useCallback(() => {
		dispatch(setOrderBy('asc'));
	}, [])

	const handleDown = useCallback(() => {
		dispatch(setOrderBy('desc'));
	}, [])

	const handleAddProductToCart = useCallback((obj) => {
		dispatch(addProductToCart(obj))
	}, [])


	return (
		<div>
			<SortWrapper>
				<SortPopup
					activeSortType={sortBy}
					items={sortItems}
					onClickSortType={onSelectSortType}
				/>
				<div>
					<Button onClick={handleUp}>asc</Button>
					<Button onClick={handleDown}>desc</Button>
				</div>
			</SortWrapper>
			<ProductList>
				{
					items
					&& items.map(obj => (
						<ProductBlock
							{...obj}
							onClickAddProduct={handleAddProductToCart}
							key={obj.id}
							available={cartItems[obj.id] ? obj.available - cartItems[obj.id].items.length : obj.available}
						/>
					))
				}
			</ProductList>
		</div>
	)
}

export default React.memo(Home);
