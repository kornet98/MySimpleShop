import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Product = styled.div`
	display: block;
	width: 120px;
	height: 150px;
	padding: 10px 10px 50px;
	border: 1px solid #000;
	border-radius: 3px;
	margin: 10px;
	position: relative;
`

const Paragraph = styled.p`
	font-size: 16px;
	margin-bottom: 10px;
`
const Button = styled.button`
	position: absolute;
	bottom: 15px;
	left: 50%;
	transform: translate(-50%, 0);
	width: 80%;
	padding: 5px;
	color: #fff;
	font-size: 16px;
	border: 1px solid #222;
	background: #222;
	border-radius: 3px;
	display: block;
	text-transform: uppercase;
	outline: none;
	transition: all 0.2s ease;
	box-shadow: -1px 5px 8px 0px rgba(0,0,0,0.75);
	&:disabled{
		background: #fff;
		color: #222;
		box-shadow: none;
	}
	&:active{
		bottom: 14px;
		box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
	}
`;



function ProductBlock({ id, name, available, price, onClickAddProduct }) {

	const onAddProduct = () => {
		const obj = {
			id,
			name,
			price,
			available
		}
		onClickAddProduct(obj)
	}


	return (
		<Product>
			<Paragraph>{name}</Paragraph>
			<Paragraph>Price: {price} $</Paragraph>
			<Paragraph> In Stock: {available}</Paragraph>
			<Button
				onClick={onAddProduct}
				disabled={available ? false : true}
			>
				Add
			</Button>
		</Product >
	)
}

ProductBlock.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	price: PropTypes.number,
	onClickAddProduct: PropTypes.func,
	available: PropTypes.number,
}

ProductBlock.defaultProps = {
	name: '---',
	price: 0,
	available: 0,
}

export default ProductBlock;
