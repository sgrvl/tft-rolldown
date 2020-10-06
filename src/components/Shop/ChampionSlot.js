import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const images = require.context("../../assets/cards", true);

const Slot = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #131e1f;
	background-image: ${(props) => `url(${props.img})`};
	background-size: contain;
	background-repeat: no-repeat;
	width: 100%;
	height: 100%;
	opacity: ${(props) => (props.clicked ? 0 : "100%")};
	cursor: pointer;
`;

const ChampionSlot = ({ slot, pool, setPool }) => {
	const [isClicked, setIsClicked] = useState(false);

	useEffect(() => {
		setIsClicked(false);
	}, [slot]);

	const cost = Object.keys(pool).find((i) =>
		Object.keys(pool[i]).find((c) => c === slot)
	);

	return (
		<Slot
			clicked={isClicked}
			onClick={() => {
				setIsClicked(true);
				setPool({
					...pool,
					[cost]: { ...pool[cost], [slot]: pool[cost][slot] - 1 },
				});
			}}
			img={images(`./${slot}.webp`)}
		>
			{slot}
		</Slot>
	);
};

export default ChampionSlot;
