import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SortBy = styled.div`
	position: relative;
	margin-right: 20px;
`
const ActiveLabel = styled.span`
	cursor: pointer;
	margin-left: 10px;
`
const SortList = styled.div`
	padding: 10px;
	margin: 0;
`
const SortItem = styled.li`
	list-style-type: none;
	cursor: pointer;
	&: hover{
		background-color: #222;
		color: #fff;
	}
`
const SoryPopup = styled.div`
	position: absolute;
	width: 100%;
	top: 20px;
	left: 0px;
	border: 1px solid #222;
	background-color: #fff;
	z-index: 5;
`

const SortPopup = React.memo(function SortPopup({ items, activeSortType, onClickSortType }) {

	const [visiblePopup, setVisiblePopup] = useState(false);
	const sortRef = useRef();

	const activeLabel = items.find(obj => obj.type === activeSortType).name;

	const toggleVisiblePopup = () => {
		setVisiblePopup(!visiblePopup)
	};

	const handleOutsideClick = (event) => {
		const path = event.path || (event.composedPath && event.composedPath());
		if (!path.includes(sortRef.current)) {
			setVisiblePopup(false);
		}
	}

	const onSelectItem = type => {
		onClickSortType(type)
		setVisiblePopup(false);
	}


	useEffect(() => {
		document.body.addEventListener('click', handleOutsideClick)
	}, []);

	return (
		<SortBy ref={sortRef}>
			<div>
				<b>Sort by:</b>
				<ActiveLabel onClick={toggleVisiblePopup}>{activeLabel}</ActiveLabel>
			</div>
			{
				visiblePopup &&
				<SoryPopup>
					<SortList>
						{items && items.map((obj, index) => (
							<SortItem
								onClick={() => onSelectItem(obj.type)}
								key={`${obj.type}_${index}`}
							>
								{obj.name}
							</SortItem>
						))}
					</SortList>
				</SoryPopup>
			}
		</SortBy >
	)
})

SortPopup.propTypes = {
	activeSortType: PropTypes.string.isRequired,
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	onClickSortType: PropTypes.func.isRequired
}
SortPopup.defaultProps = {
	items: []
}



export default SortPopup;
