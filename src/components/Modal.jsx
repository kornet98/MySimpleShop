import React, { useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { postProduct } from '../redux/actions/products';

import { getNewId, isValid } from '../modules/utils'


const ModalWrapper = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: #222;
	color: #fff;
	max-width: 50%;
	min-width: 300px;
	padding: 30px;
	transition: all 0.8s ease 0s;
	opacity: 1;
	visibility: visible;
	z-index: 10;
`
const ModalClose = styled.span`
	position: absolute;
	top: 10px;
	right: 10px;
	font-size: 20px;
	cursor: pointer;
`
const Title = styled.h2`
	font-size: 40px;
	margin-bottom: 30px;
`
const Form = styled.form`
	width: 100%;
`
const Input = styled.input`
	width: 100%;
	padding: 10px;
	margin-bottom: 30px;
	background-color: #393f4d;
	border-radius: 8px;
	color: #fff;
	font-size: 16px;
	font-family: "Roboto", sans-serif;
	&:placeholder{
		color: #999;
	}
`
const SubmitBtn = styled.input`
	width: 100px;
	padding: 10px;
	margin-bottom: 30px;
	background-color: #333;
	border-radius: 8px;
	color: #fff;
	font-size: 16px;
	font-family: "Roboto", sans-serif;
`

const Modal = ({ closeModal }) => {

	const items = useSelector(({ products }) => products.items, shallowEqual);
	const dispatch = useDispatch();

	const [name, setName] = useState('');
	const [price, setPrice] = useState(0);
	const [available, setAvailable] = useState(0);

	const handleNameChange = (event) => {
		setName(event.target.value)
	}
	const handlePriceChange = (event) => {
		setPrice(parseInt(event.target.value, 10))

	}
	const handleAvailableChange = (event) => {
		setAvailable(parseInt(event.target.value, 10))
	}

	const id = getNewId(items);

	const onSubmit = (event) => {


		if (isValid(name, price, available)) {

			event.preventDefault();
			dispatch(postProduct({
				"id": id,
				"name": name,
				"price": price,
				"available": available
			}));
			closeModal();
		} else { alert('Something went wrong:( Enter the correct data, please!') }
	}

	const handleCloseModal = () => {
		closeModal();
	}

	return (
		<ModalWrapper>
			<ModalClose onClick={handleCloseModal}>X</ModalClose>
			<Title>
				Add new product
			</Title>
			<Form>
				<Input
					type="text"
					name="name"
					placeholder="Name..."
					required
					minLength="2"
					onChange={handleNameChange}
				/>
				<Input
					type="number"
					name="price"
					placeholder="Price..."
					required
					min="5"
					onChange={handlePriceChange}
				/>
				<Input
					type="number"
					name="available"
					placeholder="Count..."
					required
					min="1"
					onChange={handleAvailableChange}
				/>
				<SubmitBtn onClick={onSubmit} type="submit" value='Add' />
			</Form>
		</ModalWrapper>
	)
}

Modal.propTypes = {
	closeModal: PropTypes.func,
}

export default React.memo(Modal);
