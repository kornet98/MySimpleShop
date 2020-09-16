import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { getTotalCount } from '../modules/utils';

const StyledHeader = styled.header`
	background-color: #222;
`
const StyledLink = styled(Link)`
  color: #fff;
  font-weight: bold;
  text-decoration: none;
`;

const CartBtn = styled.button`
	max-width: 150px;
	color: #222;
	border: 1px solid #fff;
	background-color: #fff;
	border-radius: 5px;
	padding: 10px;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 2px;
	&:hover{
		background-color: #222;
		color: #fff;
	}
`

const Logo = styled.h1`
	margin: 0;
`
const HeadWrapper = styled.div`
	height: 90px;
	margin-top: 8px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
`



function Header({ openModal }) {
	const { items } = useSelector(({ cart }) => cart);

	const handleOpenModal = () => {
		openModal()
	}

	return (
		<StyledHeader>
			<HeadWrapper>
				<StyledLink to="/">
					<Logo>My simple shop</Logo>
				</StyledLink>
				<CartBtn onClick={handleOpenModal}>New product</CartBtn>
				<StyledLink to="/cart">
					<CartBtn>Cart {getTotalCount(items)}</CartBtn>
				</StyledLink>
			</HeadWrapper>
		</StyledHeader >
	)
}

Header.propTypes = {
	openModal: PropTypes.func,
}



export default Header;